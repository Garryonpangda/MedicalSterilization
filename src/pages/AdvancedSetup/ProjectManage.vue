<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>项目</p>
      <p class="secondtext">项目管理</p>
    </div>
    <!-- 顶部盒子 -->
    <div class="bigbox">
      <!-- 搜索条件 -->
      <div class="search-box">
        <el-form :model="searchForm" label-width="100px">
        
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item>
                <el-button type="primary" @click="add" class="new">新建</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <!-- 列表 -->
      <div class="notification-list">
        <el-table
          :data="notificationList"
          height="300"
          width="100%"
          :header-cell-style="{
            background: '#027DB4',
            color: 'white',
          }"
        >
          <el-table-column type="selection" width="65"></el-table-column>

          <el-table-column
            prop="projectID"
            label="项目ID"
            width="200"
          ></el-table-column>
          <el-table-column
            prop="projectName"
            label="项目名称"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="explain"
            label="说明"
            width="250"
          ></el-table-column>
            <el-table-column
            prop="createTime"
            label="创建时间"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="updateTime"
            label="更新时间"
            width="283"
          ></el-table-column>
      


          <el-table-column label="其他" width="230px">
            <template slot-scope="scope">
              <el-button
                @click="edit(scope.row)"
                type="text"
                size="small"
                >编辑</el-button
              >
              
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

     
      notificationList: [
        {
          projectID: "1",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime:"2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
          
        },
       {
          projectID: "2",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime:"2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
          
        },
      {
          projectID: "3",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime:"2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
          
        },
     {
          projectID: "4",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime:"2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
          
        },
      {
          projectID: "5",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime:"2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
          
        },
      {
          projectID: "6",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime:"2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
          
        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 100,
    };
  },
  methods: {
    add() {
      // 添加逻辑
    },
  authorization(){
      //授权码
  },
  userlist(){
    //用户列表
  },
    handleDetail(row) {},
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
   .new{
     margin-left: -80px;
     margin-top: 10px;
   }
  }

  .notification-list {
    .el-pagination {
      margin-top: 5px;
    }
  }
}
</style>
