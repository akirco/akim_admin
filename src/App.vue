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
