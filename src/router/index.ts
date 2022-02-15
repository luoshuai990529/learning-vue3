/*
 * @Description: 这是路由配置文件入口
 * @Date: 2022-02-08 15:45:31
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-02-14 15:29:10
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    name: "notFound",
    path: "/:path(.*)+",
    redirect: {
      name: "home",
    },
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  // const title = to.meta && to.meta.title;
  // if (title) {
  //     document.title = title;
  // }
  next();
});

export { router };
