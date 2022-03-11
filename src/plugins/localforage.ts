/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-03-11 17:15:51
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-11 18:01:26
 */
import localforage from 'localforage';
interface LocalForage {
  getItem<T>(key: string, callback?: (err: any, value: T | null) => void): Promise<T | null>;

  setItem<T>(key: string, value: T, callback?: (err: any, value: T) => void): Promise<T>;

  removeItem(key: string, callback?: (err: any) => void): Promise<void>;

  clear(callback?: (err: any) => void): Promise<void>;

  length(callback?: (err: any, numberOfKeys: number) => void): Promise<number>;

  key(keyIndex: number, callback?: (err: any, key: string) => void): Promise<string>;

  keys(callback?: (err: any, keys: string[]) => void): Promise<string[]>;

  iterate<T, U>(
    iteratee: (value: T, key: string, iterationNumber: number) => U,
    callback?: (err: any, result: U) => void,
  ): Promise<U>;

  ready(callback?: (error: any) => void): Promise<void>;
}
interface LocalForageOptions {
  name?: string;
  storeName?: string;
  driver?: string | string[];
  size?: number;
  version?: number;
  description?: string;
}

let local: LocalForage;

/**
 * @description: 创建数据库
 * @param {*} name/数据库名称（传入项目名称）
 * @param {*} storeName/数据仓库名称（传入唯一标识，如account等）
 * @return {*}
 */
const createDataStore = (config: LocalForageOptions) => {
  return new Promise((resolve) => {
    local = localforage.createInstance({ ...config });
    // 仓库初始化完成
    local.ready().then(async () => {
      // 初始化测试数据
      await local.setItem('todoListData', [
        {
          id: 1,
          title: 'study',
          desc: '阅读数据《Vue.js设计与实现》',
          target: '',
          note: '',
          status: 0,
          startTime: '2022-03-11 15:00:00',
          endTime: '2022-03-11 16:00:00',
          editTime: '2022-03-11 15:00:00',
        },
      ]);
      resolve(true);
    });
  });
};

export { local, createDataStore };
