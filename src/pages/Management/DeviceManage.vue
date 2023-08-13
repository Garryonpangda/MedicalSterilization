<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>项目设备</p>
      <p class="secondtext">项目中设备、设备组列表及配置</p>
    </div>
    <el-dialog title="添加设备" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="finish">完成</el-button>
      </span>
    </el-dialog>
    
    <!-- 顶部盒子 -->
    <div class="bigbox">
      <!-- 搜索条件 -->
      <div class="search-box">
        <el-form :model="searchForm" label-width="100px">
          <el-row :gutter="15">
            <el-col :span="6">
              <el-form-item label="SN码">
                <el-input v-model="searchForm.deviceName" placeholder="请输入设备名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="组织">
                <el-select v-model="searchForm.organization" placeholder="请选择提醒类型">
                  <el-option label="类型1" value="type1"></el-option>
                  <el-option label="类型2" value="type2"></el-option>
                  <!-- 其他类型选项 -->
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="属性">
                <el-select v-model="searchForm.attribute" placeholder="请选择">
                  <el-option label="初始" value="初始"></el-option>
                  <el-option label="未激活" value="未激活"></el-option>
                  <el-option label="已激活" value="已激活"></el-option>

                  <el-option label="全部" value="全部"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="状态">
                <el-select v-model="searchForm.state" placeholder="请选择">
                  <el-option label="在线" value="在线"></el-option>
                  <el-option label="离线" value="离线"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="名称">
                <el-input v-model="searchForm.devicename" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item>
                <el-button type="primary" @click="handleSearch">查询</el-button>
                <el-button @click="handleReset">重置</el-button>
                <el-button type="primary" @click="adddevice">添加设备</el-button>
                <el-button type="primary" @click="batchadd">批量添加</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <!-- 列表 -->
      <div class="notification-list">
        <el-table :data="notificationList" height="300" style="width: 100%" :header-cell-style="{
          background: '#027DB4',
          color: 'white',

        }">
          <el-table-column type="selection" width="65"></el-table-column>
          <el-table-column prop="deviceSN" label="SN码" width="150"></el-table-column>
          <el-table-column prop="name" label="名称" width="120"></el-table-column>
          <el-table-column prop="attribute" label="属性" width="90"></el-table-column>
          <el-table-column prop="state" label="状态" width="90"></el-table-column>
          <el-table-column prop="organization" label="组织" width="233"></el-table-column>
          <el-table-column prop="useNumber" label="使用次数" width="100"></el-table-column>
          <el-table-column prop="useTime" label="使用时长(秒)" width="120"></el-table-column>
          <el-table-column prop="expectedTime" label="预计次数" width="100"></el-table-column>

          <el-table-column label="其他" width="200px">
            <template slot-scope="scope">
              <el-button @click="userecord(scope.row)" type="text" size="small">使用记录</el-button>
              <el-button @click="mianrecord(scope.row)" type="text" size="small">维护记录</el-button>
              <el-button @click="handleDetail(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页符 -->
        <el-pagination :current-page="currentPage" :page-size="pageSize" :total="total"
          @current-change="handlePageChange"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      searchForm: {
        SN: "",
        organization: "",
        attribute: "",
        state: null,
        devicename: '',
        

      },
      notificationList: [
        {
          deviceSN: "HV-UIAZ738P007",
          name: "1号楼",
          attribute: "已激活",
          state: "在线",
          organization: "桂林市人民医院",
          useNumber: "200",
          useTime: "1000",
          expectedTime: "12",
        },
        {
          deviceSN: "HV-UIAZ738P007",
          name: "1号楼",
          attribute: "已激活",
          state: "在线",
          organization: "桂林市人民医院",
          useNumber: "200",
          useTime: "1000",
          expectedTime: "12",
        },
        {
          deviceSN: "HV-UIAZ738P007",
          name: "1号楼",
          attribute: "已激活",
          state: "在线",
          organization: "桂林市人民医院",
          useNumber: "200",
          useTime: "1000",
          expectedTime: "12",
        },
        {
          deviceSN: "HV-UIAZ738P007",
          name: "1号楼",
          attribute: "已激活",
          state: "在线",
          organization: "桂林市人民医院",
          useNumber: "200",
          useTime: "1000",
          expectedTime: "12",
        },
        {
          deviceSN: "HV-UIAZ738P007",
          name: "1号楼",
          attribute: "已激活",
          state: "在线",
          organization: "桂林市人民医院",
          useNumber: "200",
          useTime: "1000",
          expectedTime: "12",
        },
        {
          deviceSN: "HV-UIAZ738P007",
          name: "1号楼",
          attribute: "已激活",
          state: "在线",
          organization: "桂林市人民医院",
          useNumber: "200",
          useTime: "1000",
          expectedTime: "12",
        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 100,
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    finish() {
      //处理添加逻辑
      

      this.dialogVisible = false;
      
    },
    handleSearch() {
      // 处理搜索逻辑
    },
    handleReset() {
      // 处理重置逻辑
    },
    adddevice() {
      console.log("???");
      this.dialogVisible = true;
      // 添加设备逻辑
    },
    batchadd() {
      // 批量添加逻辑
    },
    handleDetail(row) { },
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },
  },
};
</script>

<style scoped lang="scss">
.home_page {
  height: 250vh;

  .bigtitle {
    width: 100%;
    height: 97px;
    background-color: rgba(1, 84, 120, 1);

    p {
      color: white;
      padding-top: 18px;
      padding-left: 23px;
      font-kerning: normal;
      font-size: 23px;
    }

    .secondtext {
      color: white;

      padding-left: 23px;
      font-size: 14px;
    }
  }

  .bigbox {
    width: 100%;
    background-color: rgba(1, 84, 120, 1);
  }

  .notification-box {
    margin-top: 10px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: rgba(2, 125, 180, 1);
    border: 2px solid rgba(2, 125, 180, 1);

  }

  .notification-box .title {
    padding-top: 10px;
  }

  .notification-item {
    text-align: center;
    flex: 1;
  }

  .count {
    font-size: 20px;
    font-weight: bold;
  }

  .search-box {
    margin-top: 10px;

    .el-input {
      width: 200px;
    }

    .el-form-item__label {
      color: white;
    }
  }

  .notification-list {
    .el-pagination {
      margin-top: 5px;
    }
  }
}
</style>
