<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>组织管理</p>
      <p class="secondtext">组织列表及配置</p>
    </div>
    <el-dialog title="添加组织" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div>
        <el-form :model="organizationForm" label-width="80px" :rules="rules">
          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="名称" prop="name">
                <el-input v-model="organizationForm.name" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="联系人" >
                <el-input v-model="organizationForm.cp" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="联系方式" >
                <el-input v-model="organizationForm.ci" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="地址" prop="addres">
                <el-input v-model="organizationForm.addres" placeholder="请在地图上定位设备地" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="组织人数" prop="num">
                <el-input v-model="organizationForm.num" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

      </div>
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
            <el-col :span="8">
              <el-form-item label="名称">
                <el-input v-model="searchForm.name" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="联系电话">
                <el-input v-model="searchForm.phone" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item>
                <el-button type="primary" @click="add">新建</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <!-- 列表 -->
      <div class="notification-list">
        <el-table :data="notificationList" height="300" width="100%" :header-cell-style="{
          background: '#027DB4',
          color: 'white',
        }">
          <el-table-column type="selection" width="65"></el-table-column>

          <el-table-column prop="name" label="名称" width="200"></el-table-column>
          <el-table-column prop="identification" label="标识" width="150"></el-table-column>
          <el-table-column prop="linkman" label="联系人信息" width="100"></el-table-column>
          <el-table-column prop="phone" label="电话" width="150"></el-table-column>
          <el-table-column prop="localtion" label="位置" width="283"></el-table-column>

          <el-table-column prop="Number" label="设备数量" width="100"></el-table-column>

          <el-table-column label="其他" width="230px">
            <template slot-scope="scope">
              <el-button @click="authorization(scope.row)" type="text" size="small">授权码</el-button>
              <el-button @click="userlist(scope.row)" type="text" size="small">用户列表</el-button>
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
      dialogVisible:false,
      organizationForm:{
        name :"",
        cp :"",
        ci :"",
        addres :"",
        num :"",
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        addres: [
          {required: true}
        ],
        num: [
          {required: true}
        ],
      },
      searchForm: {
        name: "",
        phone: ""
      },
      notificationList: [
        {
          name: "桂林市医学院附属医院",
          identification: "GL-02-L",
          linkman: "张主任",
          phone: "17832873787",
          localtion: "桂林市人民医院",
          Number: "200",

        },
        {
          name: "桂林市医学院附属医院",
          identification: "GL-02-L",
          linkman: "张主任",
          phone: "17832873787",
          localtion: "桂林市人民医院",
          Number: "200",

        },
        {
          name: "桂林市医学院附属医院",
          identification: "GL-02-L",
          linkman: "张主任",
          phone: "17832873787",
          localtion: "桂林市人民医院",
          Number: "200",

        },
        {
          name: "桂林市医学院附属医院",
          identification: "GL-02-L",
          linkman: "张主任",
          phone: "17832873787",
          localtion: "桂林市人民医院",
          Number: "200",

        },
        {
          name: "桂林市医学院附属医院",
          identification: "GL-02-L",
          linkman: "张主任",
          phone: "17832873787",
          localtion: "桂林市人民医院",
          Number: "200",

        },
        {
          name: "桂林市医学院附属医院",
          identification: "GL-02-L",
          linkman: "张主任",
          phone: "17832873787",
          localtion: "桂林市人民医院",
          Number: "200",

        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 100,
    };
  },
  methods: {
    finish() {
      //处理添加逻辑


      this.dialogVisible = false;

    },
    add() {
      // 添加逻辑
      this.dialogVisible=true
    },
    authorization() {
      //授权码
    },
    userlist() {
      //用户列表
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
      width: 300px;
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
  .long {
    width: 350px;
  }
}
</style>
