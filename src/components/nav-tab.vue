<template>
  <div class="tab_container">
    <div class="tabs">
      <el-tabs type="border-card" v-model="editableTabsValue" closable class="etabs" @tab-remove="removeTab">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
          <!-- {{ item.content }} -->
        </el-tab-pane>
      </el-tabs>
      <div class="tabs_controls">
        <div class="icon-border">
          <el-icon><refresh /></el-icon>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <div class="icon-border">
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </div>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改信息</el-dropdown-item>
              <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <div class="icon-border">
          <el-icon class="el-icon--right">
            <full-screen />
          </el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FullScreen, ArrowDown, Refresh } from '@element-plus/icons-vue';

import { ref } from 'vue';

let tabIndex = 2;
const editableTabsValue = ref('2');
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  },
]);

const addTab = (targetName: string) => {
  const newTabName = `${(tabIndex += 1)}`;
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
  });
  editableTabsValue.value = newTabName;
};
const removeTab = (targetName: string) => {
  const tabs = editableTabs.value;
  let activeName = editableTabsValue.value;
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.name;
        }
      }
    });
  }

  editableTabsValue.value = activeName;
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName);
};
</script>
<style lang="scss" scoped>
.tab_container {
  width: 100%;
  height: 38px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  padding: 0px;
  margin: 0;
  // border-radius: 4px;
  position: relative;
}
.tabs {
  height: 38px;
  // background-color: aquamarine;
  // flex: 1;
  padding: 0;
  margin: 0;
}
.tabs_controls {
  height: 38px;
  background-color: #f5f7fa;
  width: 140px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding-right: 10px;
  cursor: pointer;
  border-top: 1px solid #dcdfe6;
}

.icon-border {
  width: 38px;
  height: 38px;
  border-left: 1px solid #dcdfe6;
  // border-right: 1px solid #dcdfe6;
  display: flex;
  justify-content: center;
  align-items: center;
}
.etabs {
  background-color: #ffffff;
  height: 38px;
  line-height: 38px;
  padding-left: 0;
  margin: 0;
  cursor: pointer;
}
.etabs > .el-tabs__content {
  padding: 32px;
  background-color: #ffffff;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs__header is-top {
  margin: 0 0 0 0;
  height: 38px;
}

.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-radius: 0;
}
</style>
