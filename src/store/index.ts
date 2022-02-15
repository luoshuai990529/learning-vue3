/*
 * @Description: 这是store页面
 * @Date: 2022-02-09 10:26:50
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-02-14 15:32:06
 */
import { createStore } from "vuex";

const defaultState = {
  count: 0,
};

// Create a new store instance.
export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count;
    },
  },
});
