<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

const locale = zhCn;
</script>

<template>
  <div style="width: 100%; height: 100%">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
  <!-- <TheFooter></TheFooter> -->
</template>
<style lang="scss">
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
}
::-webkit-scrollbar-thumb {
  background-color: #409eff;
  background-image: -webkit-linear-gradient(
    rgba(255, 255, 255, 0.3) 20%,
    transparent 20%,
    transparent 40%,
    rgba(255, 255, 255, 0.3) 40%,
    rgba(255, 255, 255, 0.3) 60%,
    transparent 60%,
    transparent 80%,
    rgba(255, 255, 255, 0.3) 80%
  );
  border-radius: 10px;
}
</style>
