<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-08 09:20:28
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-13 21:19:24
-->
<template>
    <div class="home-container">
        <!-- 用户信息 -->
        <div class="user-info">
            <div class="head">北京时间：{{ currentTime }}</div>
            <el-descriptions title="User Info" v-loading="loading">
                <el-descriptions-item label="Username">{{ userInfo.username }}</el-descriptions-item>
                <el-descriptions-item label="Telephone">{{ userInfo.phone }}</el-descriptions-item>
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
            <todolist-com :current-time="currentTime"></todolist-com>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { getUserInfo } from "@/api/user";
import dayjs from "dayjs"
import type { GetUserInfoModel } from "@/api/model/userModel";

let userInfo = ref<GetUserInfoModel>({ username: "", phone: "", place: "", tag: [] });
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
    userInfo.value = await getUserInfo();
    loading.value = false
});

</script>
<style lang="less" scoped>
.home-container {
    padding: 20px;
}

.head {
    margin-bottom: 15px;
}
.user-info {
    box-sizing: border-box;
    width: 800px;
    margin: 20px 0 0;
    padding: 15px;
    height: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.tag-wrap {
    margin-left: 10px;
}

.user-todo {
    margin-top: 20px;
}
</style>
