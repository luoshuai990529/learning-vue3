/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-07 10:37:58
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-11 17:59:20
 */
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index';
import store from './store/index';
import localforage from 'localforage';
import { createDataStore } from '@/plugins/localforage';
import 'normalize.css';

async function init() {

  await createDataStore({
    driver: localforage.LOCALSTORAGE,
    name: 'Lewis',
  });

  const app = createApp(App);
  app.use(store);
  app.use(router);
  app.mount('#app');
}

init();
