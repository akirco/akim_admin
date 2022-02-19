<template>
  <div class="workbench">
    <div class="top-info"><top-info></top-info></div>
    <div class="mid-info">
      <div class="mid-info-left">
        <div class="mid-info-lt">
          <card-projects></card-projects>
        </div>
        <div class="mid-info-lb">
          <card-explore></card-explore>
        </div>
      </div>
      <div class="mid-info-right">
        <card-shortcut></card-shortcut>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.workbench {
  width: 100%;
  height: 160%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
.top-info {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  -moz-box-shadow: 0px 2px 4px #e4e7ed;
  -webkit-box-shadow: 0px 2px 4px #e4e7ed;
  box-shadow: 0px 2px 4px #e4e7ed;
}

.mid-info {
  flex: 1;
  background-color: #f0f2f5;
  display: flex;
}
.mid-info-left {
  flex: 1;
  height: 160%;
  display: flex;
  flex-direction: column;
}
.mid-info-lt {
  height: 480px;
  width: 100%;
  background: #e9eef3;
  padding: 20px;
  padding-left: 0;
}
.mid-info-lb {
  flex: 1;
  width: 100%;
  background: #e9eef3;
  padding: 20px;
  padding-left: 0;
}

.mid-info-right {
  width: 460px;
  height: 160%;
  background: #e9eef3;
  padding: 20px 0 20px 0;
}
</style>
