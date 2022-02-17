<template>
  <el-menu
    default-active="1-1"
    class="side-nav"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    text-color="#99a3b8"
    background-color="#001529"
  >
    <el-menu-item class="logo" index="home">
      <el-icon :size="100"><akim /></el-icon>
      <span class="akim_title">akim admin</span>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">菜单一</el-menu-item>
      <el-menu-item index="1-2">菜单一</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="2-1">菜单一</el-menu-item>
      <el-menu-item index="2-2">菜单一</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>导航一</span>
      </template>
      <el-menu-item index="3-1">菜单一</el-menu-item>
      <el-menu-item index="3-2">菜单一</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Menu as IconMenu } from '@element-plus/icons-vue';
import akim from '@/assets/svg/akim.svg?component';
// 导入svg
const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.side-nav:not(.el-menu--collapse) {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
.logo:hover {
  background-color: #001529 !important;
}
.akim_title {
  font-size: 1.5em;
  font-weight: 600;
  color: #2aafab;
}
</style>
