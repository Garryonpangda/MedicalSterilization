<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>组织管理</p>
      <p class="secondtext">组织列表及配置</p>
    </div>
    <el-dialog title="添加组织" :visible.sync="add_orgnization_page" width="30%" :before-close="handleClose">
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
              <el-form-item label="联系人">
                <el-input v-model="organizationForm.contact" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="联系方式">
                <el-input v-model="organizationForm.phonenumber" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="地址" prop="locate">
                <el-input v-model="organizationForm.locate" placeholder="请在地图上定位设备地" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="备注">
                <el-input v-model="organizationForm.remark" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="标识" prop="characteristic">
                <el-input v-model="organizationForm.characteristic" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>



      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="add_orgnization_page = false">取消</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
      </span>
    </el-dialog>

    <!-- 创建账户 -->
    <el-dialog title="创建组织管理员账户" :visible.sync="add_user_page" width="30%" :before-close="handleClose">
      <div>
        <div>
          <el-form :model="userForm" label-width="80px" :rules="rules">
            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="账户名" prop="username">
                  <el-input v-model="userForm.username" placeholder="请输入" class="long"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="密码" prop="password">
                  <el-input v-model="userForm.password" placeholder="请输入" class="long"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="姓名">
                  <el-input v-model="userForm.name" placeholder="请输入" class="long"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="手机号" prop="phonenumber">
                  <el-input v-model="userForm.phonenumber" placeholder="请输入" class="long"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="邮箱地址">
                  <el-input v-model="userForm.email" placeholder="请输入" class="long"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="add_user_page = false">取消</el-button>
          <el-button type="primary" @click="retreat">上一步</el-button>
          <el-button type="primary" @click="finish">完成</el-button>
        </span>
      </div>

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
                <el-button type="primary" @click="search">查询</el-button>
                <el-button @click="reset">重置</el-button>
                <el-button type="primary" @click="add" class="left">新建</el-button>

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

          <el-table-column prop="orgnization.name" label="名称" width="200"></el-table-column>
          <el-table-column prop="orgnization.characteristic" label="标识" width="150"></el-table-column>
          <el-table-column prop="orgnization.contact" label="联系人信息" width="100"></el-table-column>
          <el-table-column prop="orgnization.phonenumber" label="电话" width="150"></el-table-column>
          <el-table-column prop="orgnization.locate" label="位置" width="283"></el-table-column>

          <el-table-column prop="devicenum" label="设备数量" width="100"></el-table-column>

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
import { ListAllOrgnization, ListUsersByOrgnizationId, SelectOrgnization, AddOrganization } from "@/utils/api/Mocha_itom/Organization"
import { CheckUserName} from "@/utils/api/Advanced_setting/ProjectManage"

export default {
  data() {
    var checkusername =
      async (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入项目ID"));
          return
        } else {
          const res = await CheckUserName(value)
          if (res.code == 200) {
            if (res.data == true) {
              callback()
              return
            } else {
              callback(new Error("该账户名已存在"));
            }
          } else {
            callback(new Error("Network Error"));
          }
        }
      };
    return {
      add_orgnization_page: false,
      add_user_page: false,
      organizationForm: {
        name: "",
        contact: "",
        phonenumber: "",
        locate: "",
        remark: "",
        characteristic: ""
      },
      userForm: {
        "username": "",
        "password": "",
        "name": "",
        "phonenumber": "",
        "email": ""
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        locate: [
          { required: true }
        ],
        username: [
          { validator: checkusername, trigger: 'blur' },
          { required: true, message: '请输入账户名', trigger: 'blur' },

        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phonenumber: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],

      },
      searchForm: {
        name: "",
        phone: ""
      },
      notificationList: [],
      currentPage: 1,
      pageSize: 10,
      total: 100,
    };
  },
  methods: {
    async finish() {
      //处理添加逻辑
      console.log(this.organizationForm);
      console.log(this.userForm);
      var data = JSON.stringify({
        "organization": this.organizationForm,
        "user": this.userForm
      })
      var res = await AddOrganization(data)
      if (res.code == 200) {
        this.$message({
          type: 'success',
          message: '添加成功'
        });
      } else {
        this.$message({
          type: 'error',
          message: '添加失败'
        });
      }
      console.log(res);

      this.add_user_page = false;

    },
    next() {
      this.add_orgnization_page = false;
      this.add_user_page = true
    },
    retreat() {
      this.add_user_page = false
      this.add_orgnization_page = true
    },
    async search() {
      var res = await SelectOrgnization(this.searchForm.name, this.searchForm.phone)
      if (res.code == 200) {
        this.notificationList = res.data
      }
      console.log(res);
    },
    reset() {
      this.searchForm.name = ""
      this.searchForm.phone = ""
    },
    add() {
      // 添加逻辑
      this.add_orgnization_page = true
    },
    authorization(row) {
      //授权码
      // console.log(row);
      var orgnizationid = row.orgnization.id
      // 请求获取组织的详细信息
    },
    async userlist(row) {
      //用户列表
      // console.log(row);
      var orgnizationid = row.orgnization.id
      // 请求获取组织的详细信息
      var res = await ListUsersByOrgnizationId(orgnizationid)
      if (res.code == 200) {
        // this.notificationList=res.data
      }
      console.log(res)


    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    handleDetail(row) {
      var organizationid = row.orgnization.id
      console.log(organizationid);
      //请求获取组织的详细信息
    },
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },
  },
  async created() {
    var res = await ListAllOrgnization()
    if (res.code == 200) {
      this.notificationList = res.data
    }
    console.log(res);

  }
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

  .left {
    margin-left: 80px;
  }
}
</style>
