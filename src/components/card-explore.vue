<template>
  <div class="explore-card">
    <div class="explore-card-header">
      <span class="explore-card-title">项目</span
      ><span class="explore-card-btn"><router-link to="">更多</router-link></span>
    </div>
    <hr />
    <div class="explore-card-content">
      <div class="explore-card-item"></div>
      <div class="explore-card-item"></div>
      <div class="explore-card-item"></div>
      <div class="explore-card-item"></div>
      <div class="explore-card-item"></div>
      <div class="explore-card-item"></div>
    </div>
  </div>
</template>

<style>
.explore-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  width: 100%;
}

.explore-card-title,
.explore-card-btn {
  padding: 0 20px 0 20px;
}
.explore-card-content {
  /* flex: 1; */
  height: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
}

.explore-card-item {
  height: 150px;
  width: 100%;
  border: 1px solid #e4e7ed;
  padding-top: 10px;
  border-radius: 4px;
  margin-top: 10px;
}
.explore-card-item:hover {
  border-radius: 4px;
  box-shadow: darkgrey 0px 0px 30px 2px;
  transition: all 0.3s;
}
.explore-card {
  width: 100%;
  height: 100%;
  border: 1px solid #e4e7ed;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}
</style>
