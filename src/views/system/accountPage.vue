<template>
  <div class="account_container">
    <div class="account-dept">
      <div class="dept-title">
        <span class="card-title">部门列表</span>
        <span>
          <el-tooltip class="box-item" effect="dark" content="全部展开" placement="top">
            <el-icon><caret-left /></el-icon>
          </el-tooltip>
        </span>
      </div>
      <hr />
      <div class="dept-info"><el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" /></div>
    </div>
    <div class="account-info">
      <div class="account-search">
        <el-form :inline="true" :model="formInline" class="search-form">
          <el-form-item label="用户名">
            <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="formInline.user" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="onSubmit">重置</el-button>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="account-list">
        <div class="account-list-title">
          <span>账号列表</span>
          <div class="tools">
            <el-tooltip class="box-item" effect="dark" content="新增" placement="top">
              <el-icon><plus /></el-icon>
            </el-tooltip>
            <el-tooltip class="box-item" effect="dark" content="刷新" placement="top">
              <el-icon><refresh /></el-icon>
            </el-tooltip>
            <el-popover placement="left" :width="400" trigger="click">
              <template #reference>
                <el-icon><setting /></el-icon>
              </template>
              <el-table :data="gridData">
                <el-table-column width="150" property="date" label="date"></el-table-column>
                <el-table-column width="100" property="name" label="name"></el-table-column>
                <el-table-column width="300" property="address" label="address"></el-table-column>
              </el-table>
            </el-popover>
          </div>
        </div>
        <hr />
        <div class="account-list-content">
          <el-table
            ref="multipleTableRef"
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            border
          >
            <el-table-column type="selection" width="55" />
            <el-table-column label="Date" width="120">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="name" label="Name" width="120" />
            <el-table-column property="address" label="Address" show-overflow-tooltip />
            <el-table-column fixed="right" label="Operations" width="120">
              <template #default>
                <el-button type="text" size="small" @click="handleClick">Detail</el-button>
                <el-button type="text" size="small">Edit</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { CaretLeft, Plus, Refresh, Setting } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import type { ElTable } from 'element-plus';

interface Tree {
  label: string;
  children?: Tree[];
}

const handleNodeClick = (data: Tree) => {
  console.log(data);
};

const data: Tree[] = [
  {
    label: '华东分部',
    children: [
      {
        label: '研发部',
      },
      {
        label: '研发部',
      },
      {
        label: '研发部',
      },
    ],
  },
];

const defaultProps = {
  children: 'children',
  label: 'label',
};

// * end tree

const formInline = reactive({
  user: '',
  region: '',
});

const onSubmit = () => {
  console.log('submit!');
};

// *end search input

const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
];
// * end tools
interface User {
  date: string;
  name: string;
  address: string;
}

const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref<User[]>([]);
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      // TODO: improvement typing when refactor table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      multipleTableRef.value!.toggleRowSelection(row, undefined);
    });
  } else {
    multipleTableRef.value!.clearSelection();
  }
};
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val;
};

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
];

const handleClick = () => {
  console.log('click');
};
</script>
<style lang="scss" scoped>
.account_container {
  width: 100%;
  height: 100%;
  background-color: #e9eef3;
  padding-top: 20px;
  display: flex;
}
.account-dept {
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  .dept-title {
    height: 48px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-icon {
      cursor: pointer;
    }
  }
  span {
    padding: 10px 10px 0 10px;
  }
  .el-tree {
    padding-top: 5px;
  }
}
.account-info {
  height: 100%;
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}
.account-search {
  height: 72px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .search-form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 72px;
  }
}
.account-list {
  flex: 1;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.account-list-title {
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    padding-left: 10px;
  }
  .tools {
    display: flex;
    margin-right: 10px;
    width: 100px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
}
.account-list-content {
  flex: 1;
  width: 100%;
  padding: 1px 1px 5px 1px;
  .el-pagination {
    margin-top: 10px;
  }
}
</style>
