<template>
  <div class="tool-bar-lf">
    <CollapseIcon id="collapseIcon" />
    <Breadcrumb v-show="globalStore.breadcrumb && !isMobile" id="breadcrumb" />
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/modules/global";
import CollapseIcon from "./components/CollapseIcon.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import {computed} from "vue";
const globalStore = useGlobalStore();
const isMobile = computed(() => globalStore.isMobile);

</script>

<style scoped lang="scss">
.tool-bar-lf {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  white-space: nowrap;
}
</style>
