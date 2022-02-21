<template>
  <div class="box-card">
    <div class="card-header">
      <span class="card-title">项目</span><span class="card-btn"><router-link to="">更多</router-link></span>
    </div>
    <!-- <hr /> -->
    <div class="card-content">
      <div class="card-item"></div>
      <div class="card-item"></div>
      <div class="card-item"></div>
      <div class="card-item"></div>
      <div class="card-item"></div>
      <div class="card-item"></div>
    </div>
  </div>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  width: 100%;
}
.card-title,
.card-btn {
  padding: 0 20px 0 20px;
}
.card-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* overflow: hidden; */
}
.card-item {
  width: 240px;
  /* flex-basis: auto; */
  /* height: 184px; */
  border-radius: 0;
  box-shadow: 1px 0 #f0f0f0, 0 1px #f0f0f0, 1px 1px #f0f0f0, 1px 0 #f0f0f0 inset, 0 1px #f0f0f0 inset;
  transition: all 0.3s;
  flex-grow: 1;
}
.card-item:hover {
  border-radius: 4px;
  box-shadow: darkgrey 0px 0px 20px 4px;
  transition: all 0.3s;
}
.box-card {
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}
</style>
