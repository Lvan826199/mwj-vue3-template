<template>
  <div class="card content-box">
    <span class="text">拖拽指令</span>
    <div v-draggable class="drag-box flx-center" @touchmove.prevent>请拖拽我~</div>
  </div>
</template>

<script setup name="dragDirect"></script>

<style scoped lang="scss">
@import "./index.scss";
</style>
