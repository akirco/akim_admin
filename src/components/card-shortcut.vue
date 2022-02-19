<template>
  <div class="shortcut-card">
    <div class="top-shortcut">
      <div class="top-shortcut-title">
        <span class="card-title">项目</span><span class="card-btn"><router-link to="">更多</router-link></span>
      </div>
      <div class="top-shortcut-content">
        <div class="top-shortcut-item">1</div>
        <div class="top-shortcut-item">2</div>
        <div class="top-shortcut-item">3</div>
        <div class="top-shortcut-item">4</div>
        <div class="top-shortcut-item">5</div>
        <div class="top-shortcut-item">6</div>
      </div>
    </div>
    <div class="mid-shortcut"></div>
    <div class="bottom-shortcut"></div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.shortcut-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.top-shortcut {
  width: 460px;
  height: 315px;
  background-color: white;
  // border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
}

.top-shortcut-title {
  height: 72px;
  width: 460px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-title,
.card-btn {
  padding: 20px;
}

.top-shortcut-content {
  width: 460px;
  height: 245px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
.top-shortcut-item {
  width: 151px;
  flex-basis: auto;
  height: 122px;
  border-radius: 0;
  box-shadow: 1px 0 #f0f0f0, 0 1px #f0f0f0, 1px 1px #f0f0f0, 1px 0 #f0f0f0 inset, 0 1px #f0f0f0 inset;
  transition: all 0.3s;
  flex-grow: 1;
}
.top-shortcut-item:hover {
  border-radius: 4px;
  box-shadow: darkgrey 0px 0px 20px 4px;
  transition: all 0.3s;
}
.mid-shortcut {
  width: 460px;
  height: 315px;
  background-color: white;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  margin-bottom: 20px;
  background-image: url('@/assets/svg/grouphangout.svg');
  background-repeat: no-repeat;
}
.bottom-shortcut {
  width: 460px;
  flex: 1;
  background-color: white;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
}
</style>
