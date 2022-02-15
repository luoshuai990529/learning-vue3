/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-15 14:38:46
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-02-15 18:08:16
 */
import qs from 'qs';
import axios from 'axios';
import type { ContentType, ArgumentsOptions } from '@/types/axios';
import type { AxiosRequestConfig } from 'axios';
const CancelToken = axios.CancelToken;
axios.create({
  baseURL: 'http://crm-dev.dm-cube.com/crm',
  timeout: 10000, // 请求超时时间 10s
  withCredentials: true, // 允许跨域传递 cookie
});

// 请求拦截器
axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 请求响应器
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    return Promise.resolve(res);
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * @description: 请求
 * @param {String} url/请求地址
 * @param {String} method/请求方式（默认为get）
 * @param {Object} headers/请求头
 * @param {Object} data/参数
 * @param {String} contentType/请求体参数形式：json:application/json；form:application/x-www-form-urlencoded；formData:multipart/form-data；
 * @param {String} responseType/响应数据类型：json；blob；text；stream；arraybuffer；
 * @param {Number} t/唯一标识，用于标识每个请求实例，默认为时间戳
 * @return {*}
 */
const http = (obj:AxiosRequestConfig<any> = {}):Promise<any> => {
  // 固定参数顺序
  const argument: ArgumentsOptions = {
    url: '',
    method: 'get',
    headers: {},
    data: {},
    contentType: 'json',
    responseType: 'json',
    t: new Date().getTime(),
    ...obj,
  };

  return new Promise((resolve, reject) => {
    let cancel;
    const instance: AxiosRequestConfig = {
      url: argument.url,
      method: argument.method,
      headers: argument.headers,
      responseType: argument.responseType,
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      }),
    };
    if (argument.method === 'post' || argument.method === 'put') {
      const { params, content } = getContentType(argument.data, argument.contentType);
      instance.data = params;
      instance.params = {};
      instance.headers = { ...instance.headers, 'Content-Type': content };
    } else {
      instance.params = argument.data;
    }
    instance.params = { ...instance.params, t: argument.t };

    return axios(instance)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * @description: 处理参数形式
 * @param {Object} data/参数
 * @param {String} contentType/请求头Content-Type
 * @return {*}
 */
const getContentType = (data = {}, contentType: ContentType) => {
  let params = {};
  let content = 'application/json';
  switch (contentType) {
    case 'json':
      content = 'application/json';
      params = data;
      break;
    case 'form':
      content = 'application/x-www-form-urlencoded';
      params = qs.stringify(data);
      break;
    case 'formData':
      content = 'multipart/form-data';
      params = new FormData();
      params = Object.keys(data).reduce((total, key: string) => {
        // @ts-ignore
        const res: any = data[key];
        if (Array.isArray(res)) {
          res.forEach((item: any) => {
            total.append(key + '[]', item);
          });
        } else {
          total.append(key, res);
        }
        return total;
      }, new FormData());
      break;
  }
  return { params, content };
};

export default http;
