<!--
 * @Description: 这是***页面（组件）
 * @Date: 2022-02-14 17:24:35
 * @Author: luoshuai
 * @LastEditors: luoshuai
 * @LastEditTime: 2022-03-24 16:22:50
-->
<template>
    <div class="todolist-item-container">
        <div class="todolist-tag-wrap">
            <div class="checkbox-operator">
                <el-checkbox
                    v-model="checkAll"
                    :indeterminate="isIndeterminate"
                    @change="handleCheckAllChange"
                >全选</el-checkbox>
                <el-button
                    :disabled="checkedTodos.length === 0"
                    class="complete-btn"
                    type="success"
                    size="small"
                >完成选中</el-button>
                <el-button
                    :disabled="checkedTodos.length === 0"
                    class="complete-btn"
                    type="danger"
                    size="small"
                >删除选中</el-button>
            </div>
            <div class="tag-group">
                {{ data.label }}
                <span class="switch-icon" :class="{'unfold-icon': isUnfold}" @click="unfoldHandler">+</span>
            </div>
        </div>
        <el-checkbox-group v-model="checkedTodos" @change="handleCheckedTodosChange">
            <div class="todolist-sub-item" v-for="(task) in data.list" :key="task.id">
                <div class="left-content">
                    <span class="checkbox-wrap">
                        <el-checkbox :key="task.id" size="default" :label="task.id">
                            <span class="title">{{ task.desc }}</span>
                        </el-checkbox>
                    </span>
                </div>
                <div class="right-operator">
                    <el-button type="text">详情</el-button>
                    <el-button type="success" :icon="Check" circle></el-button>
                    <el-button type="primary" :icon="Edit" circle></el-button>
                    <el-button type="danger" :icon="Delete" circle></el-button>
                </div>
            </div>
        </el-checkbox-group>
    </div>
</template>

<script lang="ts" setup>
import { Edit, Check, Delete } from '@element-plus/icons-vue'
import { TodoListItemType } from '@/api/model/userModel'
const { data } = defineProps<{
    data: TodoListItemType
}>()

const checkedList = data.list.map(task => task.id) // 该标签下的所有待办项id数组
const checkAll = ref(false)
const isIndeterminate = ref(false)
const checkedTodos = ref<number[]>([]) // 选中的待办项id数组

const handleCheckAllChange = (val: boolean) => {
    checkedTodos.value = val ? checkedList : []
    isIndeterminate.value = false
}

const handleCheckedTodosChange = (value: number[]) => {
    const checkedCount = value.length
    checkAll.value = checkedCount === checkedList.length
    isIndeterminate.value = checkedCount > 0 && checkedCount < checkedList.length
}

const isUnfold = ref(true) // 展开状态 默认-true
const unfoldHandler = () => {
    isUnfold.value = !isUnfold.value
}
</script>

<style lang="less" scoped>
.todolist-item-container {
    border: 1px solid #dcdfe6;
    // border-radius: 15px 15px 0 0;
    overflow: hidden;
    margin-top: 15px;
}

.todolist-tag-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 38px;
    padding: 0 20px;
    border-bottom: 1px solid #dcdfe6;
    .checkbox-operator {
        display: flex;
        align-items: center;
        .complete-btn {
            margin-left: 10px;
        }
    }
    .tag-group {
        color: rgb(117, 117, 117);
        font-size: 14px;
        .switch-icon{
            display: inline-block;
            width: 50px;
            height: 100%;
            background: #bfaaaa;
            cursor: pointer;
        }
    }
}

.todolist-sub-item {
    display: flex;
    justify-content: space-between;
    line-height: 42px;
    padding: 0 20px 0 40px;
    &:hover {
        background: rgb(245, 245, 245);
    }
    .left-content {
        cursor: pointer;
        .checkbox-wrap {
            display: flex;
            align-items: center;
            height: 100%;
        }
        .title {
            display: inline-block;
            vertical-align: middle;
        }
    }
    .right-content {
    }
}
</style>
