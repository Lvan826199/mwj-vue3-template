<template>
  <el-dialog v-model="dialogVisible" title="个人信息" width="500px" draggable>
    <span>昵称：</span>
    <span>{{userInfo.nickname}}</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import {useUserStore} from "@/stores/modules/user.js";
import {storeToRefs} from "pinia";
const userStore = useUserStore();
const {userInfo} = storeToRefs(userStore)

const dialogVisible = ref(false);
const openDialog = () => {
  dialogVisible.value = true;
};

defineExpose({ openDialog });
</script>
