/*
 * @Description: 这是api请求封装
 * @Date: 2022-02-14 17:39:31
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-24 14:23:40
 */
import type { GetUserInfoModel, TodoListItemType } from './model/userModel';
import { local } from '@/plugins/localforage';
// import axios from '@/utils/axios';

// export const getUserInfo = ():Promise<GetUserInfoModel> => axios({ url: '/user/getUserInfo', method: 'get'})

export const getUserInfo = (): Promise<GetUserInfoModel> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const payload: GetUserInfoModel = {
        username: 'Lewis',
        wechat: '10086',
        place: 'GuangZhou',
        tag: ['Javascript', 'Vue', 'React'],
      };
      resolve(payload);
    }, 1000);
  });
};

export const getTodoList = (): Promise<TodoListItemType[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const payload: TodoListItemType[] | any = await local.getItem('todoListData');
      resolve(payload);
    }, 1000);
  });
};
