<template>
  <div class="header_container">
    <div id="lef_icon">
      <el-icon :label="false" @click="collpase"><fold /></el-icon>
      <!-- <el-icon><expand /></el-icon> -->
    </div>
    <div id="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">management</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="rig_tools">
      <el-icon><search /></el-icon>
      <el-icon><bell /></el-icon>
      <el-icon><full-screen /></el-icon>
      <multiLanguage />
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <el-dropdown>
        <span class="el-dropdown-link">
          个人信息
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改信息</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-icon><setting /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Fold, Expand, Search, Bell, FullScreen, Setting, ArrowDown } from '@element-plus/icons-vue';
import multiLanguage from '@/assets/svg/multi-language.svg?component';

const collpase = () => {
  console.log('1');
};
</script>

<style lang="scss" scoped>
.header_container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#lef_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  font-size: 23px;
}
#lef_icon:hover {
  background-color: #f6f6f6;
}
#breadcrumb {
  flex: 1;
  display: flex;
  align-items: center;
}
#rig_tools {
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 23px;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: #374151;
  display: flex;
  align-items: center;
}
</style>
