<template>
  <div class="analy-container">
    <div class="ac_data">
      <data-card></data-card>
      <data-card></data-card>
      <data-card></data-card>
      <data-card></data-card>
    </div>
    <div class="pv_data">
      <pv-tab></pv-tab>
    </div>
    <div class="ot_data">
      <data-card class="ot_card"></data-card>
      <data-card class="ot_card"></data-card>
      <data-card class="ot_card"></data-card>
      <data-card class="ot_card"></data-card>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.analy-container {
  margin: 0;
  // padding: 10px 10px 0 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #f6f9fd;
}
.ac_data {
  background-color: #ffffff;
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: space-evenly;
}
.pv_data {
  background-color: #ffffff;
  width: 100%;
  flex: 1;
  padding: 0 13px 0 13px;
  border: 1px solid #f6f9fd;
}
.ot_data {
  background-color: #ffffff;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-evenly;
}
.ot_card {
  height: 160px;
}
</style>
