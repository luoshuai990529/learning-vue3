<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-14 17:24:35
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-13 21:19:44
-->
<template>
    <div class="todolist-container">
        <el-card class="box-card" v-loading="loading">
            <div class="operator">操作列</div>
            <div class="todolist-content">
                <div class="todolist-item" v-for="(item) in todoList" :key="item.id">
                    <todo-list-item :data="item"></todo-list-item>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import TodoListItem from "./modules/TodoListItem.vue"
import { getTodoList } from "@/api/user"
import { TodoListItem as TodoListItemType } from "@/api/model/userModel"

let todoList = ref<TodoListItemType[]>([]);
let loading = ref(true)

onMounted(async () => {
    todoList.value = await getTodoList();
    loading.value = false
});

</script>

<style lang="less" scoped>
.todolist-container {
    width: 800px;
    .operator {
        // border: 1px solid black;
        margin: 0 0 20px;
    }
    .todolist-content {
    }
}
</style>
