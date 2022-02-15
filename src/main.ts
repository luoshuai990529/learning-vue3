/*
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-07 10:37:58
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-02-14 17:19:26
 */
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import store from "./store/index";
import "normalize.css"

const app = createApp(App);

app.config.globalProperties.customerParams = "luoshuai";

app.use(store);
app.use(router);
app.mount("#app");
