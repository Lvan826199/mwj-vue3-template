<template>
  <el-icon v-show="!isMobile" class="collapse-icon" @click="changeCollapse">
    <component :is="globalStore.isCollapse ? 'expand' : 'fold'"></component>
  </el-icon>
</template>

<script setup>
import { useGlobalStore } from "@/stores/modules/global";
import {computed} from "vue";

const globalStore = useGlobalStore();
const changeCollapse = () => globalStore.setGlobalState("isCollapse", !globalStore.isCollapse);

const isMobile = computed(() => globalStore.isMobile);
</script>

<style scoped lang="scss">
.collapse-icon {
  margin-right: 20px;
  font-size: 22px;
  color: var(--el-header-text-color);
  cursor: pointer;
}
</style>
