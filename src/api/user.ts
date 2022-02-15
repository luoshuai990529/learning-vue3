/*
 * @Description: 这是api请求封装
 * @Date: 2022-02-14 17:39:31
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-02-15 18:08:12
 */
import type { GetUserInfoModel } from './model/userModel';
import axios from '@/utils/axios';

// export const getUserInfo = ():Promise<GetUserInfoModel> => axios({ url: '/user/getUserInfo', method: 'get'})

export const getUserInfo = (): Promise<GetUserInfoModel> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const payload: GetUserInfoModel = {
        username: 'Lewis',
        phone: '10086',
        place: 'GuangZhou',
        tag: ['Javascript', 'Vue', 'React'],
      };
      resolve(payload);
    }, 1000);
  });
};
