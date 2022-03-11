/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-15 17:13:29
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-11 17:41:01
 */
export interface GetUserInfoModel {
  username: string;
  phone: string;
  place: string;
  tag: string[];
}

export enum TodoItemStateEnum {
  '进行中',
  '已完成',
  '未开始',
  '未完成',
}

export interface TodoListItem {
  id: number;
  title: string;
  desc: string;
  target: string;
  note: string;
  status: TodoItemStateEnum;
  startTime: string;
  endTime: string;
  editTime: string;
}
