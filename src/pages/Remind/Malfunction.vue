<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>维护提示</p>
      <p class="secondtext">当前项目存在的维护提示</p>
    </div>
    <!-- 顶部盒子 -->
    <div class="bigbox">
    <div class="notification-box">
      <div class="notification-item">
        <div class="title">待处理提醒</div>
        <div class="count">{{ pendingCount }}</div>
      </div>
      <div class="notification-item">
        <div class="title">已处理提醒</div>
        <div class="count">{{ processedCount }}</div>
      </div>
    </div>

    <!-- 搜索条件 -->
    <div class="search-box">
      <el-form :model="searchForm" label-width="100px" >
        <el-row :gutter="15">
          <el-col :span="6">
            <el-form-item label="设备名称">
              <el-input
                v-model="searchForm.deviceName"
                placeholder="请输入设备名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="提醒类型">
              <el-select
                v-model="searchForm.reminderType"
                placeholder="请选择提醒类型"
              >
                <el-option label="类型1" value="type1"></el-option>
                <el-option label="类型2" value="type2"></el-option>
                <!-- 其他类型选项 -->
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="事件状态">
              <el-select
                v-model="searchForm.eventStatus"
                placeholder="请选择事件状态"
              >
                <el-option label="已处理" value="processed"></el-option>
                <el-option label="未处理" value="pending"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="提醒时间">
              <el-date-picker
                v-model="searchForm.reminderTime"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item>
              <el-button type="primary" @click="handleSearch">查询</el-button>
              <el-button @click="handleReset">重置</el-button>
              <el-button type="success" @click="handleExport">导出</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- 列表 -->
    <div class="notification-list">
      <el-table :data="notificationList" height="300"  style="width: 100%"  :header-cell-style="{
            background: '#027DB4',
            color: 'white',
            textAlign: 'center',
            height: '20px',
          }">
       <el-table-column  prop="deviceSN" label="设备SN码" width="150"></el-table-column>
        <el-table-column prop="eventStatus" label="事件状态" width="90"></el-table-column>
        <el-table-column prop="organization" label="组织" width="170"></el-table-column>
        <el-table-column prop="reminderTime" label="提醒时间" width="170"></el-table-column>
        <el-table-column prop="reminderInfo" label="提醒信息"></el-table-column>
        <el-table-column prop="abnormalValue" label="异常值" width="250"></el-table-column>
        <el-table-column prop="processTime" label="处理时间" width="170"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleView(scope.row)" type="text" size="small">查看设备</el-button>
            <el-button @click="handleDetail(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页符 -->
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pendingCount: 10, // 待处理提醒数量
      processedCount: 20, // 已处理提醒数量
      searchForm: {
        deviceName: "",
        reminderType: "",
        eventStatus: "",
        reminderTime: null,
      },
      notificationList: [
        {
          deviceSN: "HV-UIAZ738P007",
          eventStatus: "已处理",
          organization: "桂林市医学院附属医院",
          reminderTime: "2023-07-20 10:30:00",
          reminderInfo: "设备异常",
          abnormalValue: "灯头已超过使用寿命，建议立即维保【寿命5000次，当前9000次】",
          processTime: "2023-07-20 11:15:00",
        },
        {
          deviceSN: "Device002",
          eventStatus: "未处理",
          organization: "组织B",
          reminderTime: "2023-07-21 09:45:00",
          reminderInfo: "设备故障",
          abnormalValue: "50",
          processTime: null,
        },
          {
          deviceSN: "Device002",
          eventStatus: "未处理",
          organization: "组织B",
          reminderTime: "2023-07-21 09:45:00",
          reminderInfo: "设备故障",
          abnormalValue: "50",
          processTime: null,
        },
          {
          deviceSN: "Device002",
          eventStatus: "未处理",
          organization: "组织B",
          reminderTime: "2023-07-21 09:45:00",
          reminderInfo: "设备故障",
          abnormalValue: "50",
          processTime: null,
        },
           {
          deviceSN: "Device002",
          eventStatus: "未处理",
          organization: "组织B",
          reminderTime: "2023-07-21 09:45:00",
          reminderInfo: "设备故障",
          abnormalValue: "50",
          processTime: null,
        },
           {
          deviceSN: "Device002",
          eventStatus: "未处理",
          organization: "组织B",
          reminderTime: "2023-07-21 09:45:00",
          reminderInfo: "设备故障",
          abnormalValue: "50",
          processTime: null,
        },
      ], 
      currentPage: 1,
      pageSize: 10,
      total: 100, 
    };
  },
  methods: {
    handleSearch() {
      // 处理搜索逻辑
    },
    handleReset() {
      // 处理重置逻辑
    },
    handleExport() {
      // 处理导出逻辑
    },
    handleView(row) {
      // 查看设备逻辑
    },
    handleDetail(row) {
    
    },
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
  .bigbox{
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
    color: white;
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
    .el-pagination{
      margin-top: 5px;
    }
  }
}
</style>
