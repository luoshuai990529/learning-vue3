/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-15 15:21:40
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-02-15 16:48:29
 */
import type { AxiosRequestConfig } from 'axios';

export type ContentType = 'json' | 'form' | 'formData';

export type ArgumentsOptionsExtra = {
  contentType: ContentType;
  t: number;
};
export type ArgumentsOptions = AxiosRequestConfig & ArgumentsOptionsExtra;
