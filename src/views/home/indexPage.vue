<template>
  <el-container>
    <el-aside width="200px">
      <aside_nav></aside_nav>
    </el-aside>
    <el-container>
      <el-header>
        <head_nav></head_nav>
      </el-header>
      <el-main>
        <NavTab></NavTab>
        <div class="main-container">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import NavTab from '@/components/nav-tab.vue';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}

.el-header {
  line-height: 56px;
  height: 56px;
  padding: 0;
}

.el-aside {
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  --el-main-padding: 10px;
}

.main-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #e4e7ed;
  background-color: white;
}
</style>
