<template>
  <el-tabs v-model="activeName" class="pv-tabs">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const activeName = ref('first');

// const handleClick = (tab: string, event: Event) => {
//   console.log(tab, event);
// };
</script>
<style>
.pv-tabs > .el-tabs__content {
  padding: 20px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
