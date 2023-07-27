<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>组织角色</p>
      <p class="secondtext">管理项目中所有角色</p>
    </div>
    <!-- 顶部盒子 -->
    <div class="bigbox">
      <!-- 搜索条件 -->
      <div class="search-box">
        <el-form :model="searchForm" label-width="100px">
          <el-row :gutter="15">
            <el-col :span="10">
              <el-form-item label="选择项目" class="select">
                <el-select v-model="searchForm.state" placeholder="选择项目">
                  <el-option
                    label="海威东南区域总代（当前项目）海威东南区域总代（当前项目）"
                    value="海威东南区域总代（当前项目）"
                  ></el-option>
                  <el-option
                    label="海威西南地区总代"
                    value="海威西南地区总代"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <el-button type="primary" @click="add">查询</el-button>
              </el-form-item>
            </el-col>
          </el-row>
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
            prop="projectName"
            label="角色名称"
            width="283"
          ></el-table-column>
          <el-table-column
            prop="explain"
            label="说明"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="updateTime"
            label="更新时间"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="accountNumber"
            label="账户数量"
            width="180"
          ></el-table-column>

      

          <el-table-column label="其他" width="230px">
            <template slot-scope="scope">
              <el-button
                @click="edit(scope.row)"
                type="text"
                size="small"
                >编辑</el-button
              >
              <el-button @click="authorization(scope.row)" type="text" size="small"
                >功能授权</el-button
              >
              <el-button
                @click="handleDetail(scope.row)"
                type="text"
                size="small"
                >详情</el-button
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
      searchForm: {
        name: "",
        phone: "",
      },
      notificationList: [
        {
          projectName: "桂林市医学院附属医院",
          explain: "创建者",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/3/9 18:00",
          accountNumber: "(1/1)",
        },
       {
          projectName: "桂林市医学院附属医院",
          explain: "创建者",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/3/9 18:00",
          accountNumber: "(1/1)",
        },
        {
          projectName: "桂林市医学院附属医院",
          explain: "创建者",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/3/9 18:00",
          accountNumber: "(1/1)",
        },
         {
          projectName: "桂林市医学院附属医院",
          explain: "创建者",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/3/9 18:00",
          accountNumber: "(1/1)",
        },
        {
          projectName: "桂林市医学院附属医院",
          explain: "创建者",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/3/9 18:00",
          accountNumber: "(1/1)",
        },
        {
          projectName: "桂林市医学院附属医院",
          explain: "创建者",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/3/9 18:00",
          accountNumber: "(1/1)",
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
    authorization() {
      //授权码
    },
    userlist() {
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
    position: relative;
    .el-select {
      width: 450px;
    }
    
    .el-form-item__label {
      color: white;
      
    }
    .new{
        margin-left: -72px;
    }
  }

  .notification-list {
    .el-pagination {
      margin-top: 5px;
    }
  }
}
</style>
