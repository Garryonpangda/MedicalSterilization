<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>项目账号</p>
      <p class="secondtext">管理项目中所有账号</p>

    </div>
    <el-dialog title="添加账号" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div>
        <el-form :model="acForm" label-width="80px" :rules="rules">
          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="账户名" prop="username">
                <el-input v-model="acForm.username" placeholder="请填写账户名" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="登陆密码" prop="pwd">
                <el-input v-model="acForm.pwd" placeholder="请填写登录密码" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15" >
            <el-col :span="400" >
              <el-form-item label="角色选择" prop="role" >
                <div class="long">
                  <Select :options="options" @selected="selected"/>
                </div>
                

              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="姓名">
                <el-input v-model="acForm.name" placeholder="请填写姓名" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="acForm.phone" placeholder="请填写手机号" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="邮箱地址">
                <el-input v-model="acForm.email" placeholder="请填写邮箱地址" class="long"></el-input>
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
    <transition name="slide">
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
                <el-form-item label="选择项目" class="select">
                  <el-select v-model="searchForm.project" placeholder="选择项目">
                    <el-option label="海威东南区域总代（当前项目）海威东南区域总代（当前项目）" value="海威东南区域总代（当前项目）"></el-option>
                    <el-option label="海威西南地区总代" value="海威西南地区总代"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>


              <el-col :span="8">
                <el-form-item label="邮箱地址">
                  <el-input v-model="searchForm.email" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="8">
                <el-form-item label="手机号">
                  <el-input v-model="searchForm.phone" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="账号状态" class="select">
                  <el-select v-model="searchForm.acstate" placeholder="请选择账号状态">
                    <el-option label="全部" value="全部"></el-option>
                    <el-option label="正常" value="正常"></el-option>
                    <el-option label="冻结" value="冻结"></el-option>
                    <el-option label="关闭" value="关闭"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item>
                  <el-button type="primary" @click="select">查询</el-button>
                  <el-button type="primary" @click="reset">重置</el-button>
                  <el-button type="primary" @click="add">+新建</el-button>
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

            <el-table-column prop="name" label="用户名" width="100"></el-table-column>
            <el-table-column prop="username" label="登录账号名" width="150"></el-table-column>
            <el-table-column prop="phone" label="手机号" width="100"></el-table-column>
            <el-table-column prop="email" label="邮箱" width="150"></el-table-column>
            <el-table-column prop="role" label="角色" width="100"></el-table-column>

            <el-table-column prop="lasttime" label="上次登录时间" width="120"></el-table-column>

            <el-table-column prop="acstate" label="账号状态" width="100"></el-table-column>

            <el-table-column label="操作" width="250px">
              <template slot-scope="scope">
                <el-button @click="edit" type="text" size="small">编辑</el-button>
                <el-button @click="detail" type="text" size="small">详情</el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- 分页符 -->
          <el-pagination :current-page="currentPage" :page-size="pageSize" :total="total"
            @current-change="handlePageChange"></el-pagination>
        </div>
      </div>

    </transition>

  </div>
</template>

<script>
import Select from '@/components/Select.vue'

export default {

  components: {
    Select
  },
  data() {
    return {
      options: [
        {
          value: '001',
          label: '黄金糕',
          check: false
        },
        {
          value: '002',
          label: '双皮奶',
          check: false
        },
        {
          value: '003',
          label: '蚵仔煎',
          check: false
        },
        {
          value: '004',
          label: '龙须面',
          check: false
        },
        {
          value: '005',
          label: '北京烤鸭',
          check: false
        }
      ],
      acForm: {
        username:"",
        pwd:"",
        role:null,
        name:"",
        phone:"",
        email:"",
      },
      rules: {
        username: [
          { required: true, message: '请输入账户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入登陆密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        role: [
          { required: true, message: '请选择角色', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      },
      searchForm: {
        name: "",
        phone: "",
        project: "",
        acstate: "",
        email: ""
      },
      notificationList: [
        {
          name: "lin",
          username: "123456789",
          phone: "123456780",
          email: "123456789",
          role: "管理员",
          lasttime: "2021/9/9 18:00",
          acstate: "关闭"

        },
        {
          name: "lin",
          username: "123456789",
          phone: "123456780",
          email: "123456789",
          role: "管理员",
          lasttime: "2021/9/9 18:00",
          acstate: "关闭"

        },
        {
          name: "lin",
          username: "123456789",
          phone: "123456780",
          email: "123456789",
          role: "管理员",
          lasttime: "2021/9/9 18:00",
          acstate: "关闭"

        },
        {
          name: "lin",
          username: "123456789",
          phone: "123456780",
          email: "123456789",
          role: "管理员",
          lasttime: "2021/9/9 18:00",
          acstate: "关闭"

        },
        {
          name: "lin",
          username: "123456789",
          phone: "123456780",
          email: "123456789",
          role: "管理员",
          lasttime: "2021/9/9 18:00",
          acstate: "关闭"

        },
        {
          name: "lin",
          username: "123456789",
          phone: "123456780",
          email: "123456789",
          role: "管理员",
          lasttime: "2021/9/9 18:00",
          acstate: "关闭"

        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 100,
      dialogVisible: false,

    };
  },
  methods: {
    selected(value) {
      console.log(value);
      this.acForm.role=value
      let str = value.join()
      console.log(str)
      // 注意选项为全部时数据里面的值为空字符串和无的情况
      if (value.includes('') || value.length === 0) {
        // console.log(Object.keys(this.optionsData).join());
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },

    select() {

    },
    detail() {

    },
    edit() {

    },
    add() {
      // 添加逻辑
      this.dialogVisible = true

    },
    finish() {
      console.log(this.acForm)
      this.dialogVisible = false
    },
    reset() {

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

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .long {
    width: 350px;
  }

}
</style>
