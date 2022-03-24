<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-08 09:20:28
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-24 16:04:56
-->
<template>
    <div class="home-container">
        <div class="home-left">
            <!-- 用户信息 -->
            <div class="user-info">
                <div class="user-info-head">北京时间：{{ currentTime }}</div>
                <el-descriptions title="Information Of The Author" v-loading="loading">
                    <el-descriptions-item label="Username">{{ userInfo.username }}</el-descriptions-item>
                    <el-descriptions-item label="Wechat">{{ userInfo.wechat }}</el-descriptions-item>
                    <el-descriptions-item label="Place">{{ userInfo.place }}</el-descriptions-item>
                    <el-descriptions-item label="Remarks">
                        <el-tag
                            class="tag-wrap"
                            size="small"
                            v-for="(item, index) of userInfo.tag"
                            :key="index"
                        >{{ item }}</el-tag>
                    </el-descriptions-item>
                </el-descriptions>
            </div>
            <!-- 待办事件 -->
            <div class="user-todo">
                <todo-list-com :current-time="currentTime"></todo-list-com>
            </div>
        </div>
        <div class="home-right">
            <el-card class="box-card">完成列表</el-card>
        </div>
    </div>
</template>
<script lang="ts" setup>
import TodoListCom from './components/TodolistCom/index.vue'
import { getUserInfo } from "@/api/user";
import dayjs from "dayjs"
import type { GetUserInfoModel } from "@/api/model/userModel";

let userInfo = ref<GetUserInfoModel>({ username: "", wechat: "", place: "", tag: [] });
let loading = ref(true)
let currentTime = ref<string>(dayjs(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss"))

function startTime(time: number) {
    currentTime.value = dayjs(time).format("YYYY-MM-DD HH:mm:ss")
    setTimeout(() => {
        time += 1000
        currentTime.value = dayjs(time).format("YYYY-MM-DD HH:mm:ss")
        startTime(time)
    }, 1000)
}
startTime(new Date().getTime())

onMounted(async () => {
    console.log("onMounted getUserInfo");

    userInfo.value = await getUserInfo();
    loading.value = false
});

</script>
<style lang="less" scoped>
.home-container {
    display: flex;
    padding: 40px;
}
.home-left {
    flex: 1;
}
.home-right {
    flex: 1;
    min-width: 400px;
    margin-left: 20px;
}

.user-info {
    box-sizing: border-box;
    min-width: 700px;
    padding: 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .user-info-head {
        margin-bottom: 15px;
    }
    .tag-wrap {
        margin-left: 10px;
    }
}

.user-todo {
    margin-top: 20px;
}
</style>
