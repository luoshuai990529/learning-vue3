<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-14 17:24:35
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-14 19:49:22
-->
<template>
    <div class="todolist-item-container" v-for="(item) in data.list" :key="item.id">
        <div class="left-content">
            <span class="checkbox">
                <el-checkbox v-model="checked" label size="large"></el-checkbox>
            </span>
            <span class="title">{{ item.desc }}</span>
        </div>
        <div class="right-operator">
            <el-button type="success" :icon="Check" circle></el-button>
            <el-button type="primary" :icon="Edit" circle></el-button>
            <el-button type="danger" :icon="Delete" circle></el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Edit, Check, Delete } from '@element-plus/icons-vue'
import { TodoListItemType } from "@/api/model/userModel"
const { data } = defineProps<{
    data: TodoListItemType
}>()
console.log("data---", JSON.stringify(data));

const checked = ref<boolean>(false)

</script>

<style lang="less" scoped>
.todolist-item-container {
    display: flex;
    justify-content: space-between;
    line-height: 42px;
    padding: 0 20px 0 40px;
    border: 1px solid black;
    .left-content {
        .checkbox {
            vertical-align: middle;
        }
        .title {
            display: inline-block;
            margin-left: 10px;
            vertical-align: middle;
        }
    }
    .right-content {
    }
}
</style>
