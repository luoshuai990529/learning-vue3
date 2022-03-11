<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-14 17:24:35
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-11 19:01:42
-->
<template>
    <div class="todolist-item-container">
        <el-checkbox v-model="checked" label size="large"></el-checkbox>
        <span class="title">{{ data.title }}</span>
    </div>
</template>

<script lang="ts" setup>
import { TodoListItem as TodoListItemType } from "@/api/model/userModel"
const { data } = defineProps<{
    data: TodoListItemType
}>()
const checked = ref<boolean>(false)

</script>

<style lang="less" scoped>
.todolist-item-container {
    border: 1px solid black;
    .title {
        display: inline-block;
        margin-left: 10px;
        vertical-align: text-top;
    }
}
</style>
