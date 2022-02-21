<template>
  <div class="top-info-left">
    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="65"></el-avatar>
    <el-descriptions title="早安, Vben Admin, 开始您一天的工作吧！">
      <el-descriptions-item label="今日晴，20℃ - 32℃！"></el-descriptions-item>
    </el-descriptions>
  </div>
  <div class="top-info-right">
    <el-descriptions title="待办">
      <el-descriptions-item label="30/100"></el-descriptions-item>
    </el-descriptions>
    <el-descriptions title="待办">
      <el-descriptions-item label="30/100"></el-descriptions-item>
    </el-descriptions>
    <el-descriptions title="待办">
      <el-descriptions-item label="30/100"></el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<style>
.top-info-left {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.el-avatar {
  flex-shrink: 0;
}
.el-descriptions {
  padding-left: 20px;
  flex-shrink: 0;
}

.top-info-right {
  width: 440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
@media screen and (max-width: 952px) {
  .top-info-right {
    display: none;
  }
}
</style>
