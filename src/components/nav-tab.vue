<template>
  <div class="tab_container">
    <div class="tabs">
      <el-tabs v-model="editableTabsValue" type="border-card" editable class="etabs" @edit="handleTabsEdit">
        <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
          <!-- {{ item.content }} -->
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="tabs_controls">
      <el-icon><refresh /></el-icon>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改信息</el-dropdown-item>
            <el-dropdown-item divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-icon class="el-icon--right">
        <full-screen />
      </el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Fold, Expand, Search, Bell, FullScreen, Setting, ArrowDown, Refresh } from '@element-plus/icons-vue';

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

const handleTabsEdit = (targetName: string | null, action: 'remove' | 'add') => {
  if (action === 'add') {
    const newTabName = `${(tabIndex += 1)}`;
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    });
    editableTabsValue.value = newTabName;
  } else if (action === 'remove') {
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
  }
};
</script>
<style lang="scss" scoped>
.tab_container {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin: 0;
  border-radius: 4px;
}
.tabs {
  height: inherit;
  // background-color: aquamarine;
  flex: 1;
}
.tabs_controls {
  height: inherit;
  background-color: white;
  width: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding-right: 10px;
}
.etabs {
  background-color: white;
}
.etabs > .el-tabs__content {
  padding: 32px;
  background-color: #f4f5f7;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs__header is-top {
  margin: 0 0 0 0;
}
</style>
