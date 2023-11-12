<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>项目账号</p>
      <p class="secondtext">管理项目中所有账号</p>
    </div>

    <!-- 添加账号 -->
    <el-dialog
      title="添加账号"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <div>
        <el-form :model="acForm" label-width="80px" :rules="rules">
          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="账户名" prop="username">
                <el-input
                  v-model="acForm.username"
                  placeholder="请填写账户名"
                  class="long"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="登陆密码" prop="pwd">
                <el-input
                  v-model="acForm.password"
                  placeholder="请填写登录密码"
                  class="long"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item v-if="roleoptions != null" label="角色选择">
                <!-- <Select :options="options" @selected="selected" /> -->

                <el-transfer
                  :titles="['角色未拥有权限', '角色已拥有权限']"
                  v-model="acForm.role"
                  :props="{
                    key: 'id',
                    label: 'remark',
                  }"
                  :data="formattedAumenus"
                >
                </el-transfer>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="姓名">
                <el-input
                  v-model="acForm.name"
                  placeholder="请填写姓名"
                  class="long"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="手机号" prop="phone">
                <el-input
                  v-model="acForm.phone"
                  placeholder="请填写手机号"
                  class="long"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="邮箱地址">
                <el-input
                  v-model="acForm.email"
                  placeholder="请填写邮箱地址"
                  class="long"
                ></el-input>
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

    <!-- 编辑账号 -->
    <el-dialog
      title="编辑"
      :visible.sync="editpage"
      width="40%"
      :before-close="handleClose"
    >
      <div>
        <el-form :model="editForm" label-width="80px" :rules="rules">
          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="账户名" prop="username">
                <el-input
                  v-model="editForm.username"
                  placeholder="请填写账户名"
                  class="long"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="登陆密码" prop="pwd">
                <el-input
                  v-model="editForm.password"
                  placeholder="请填写登录密码"
                  class="long"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item
                :titles="['角色未拥有权限', '角色已拥有权限']"
                v-if="roleoptions != null"
                label="角色选择"
              >
                <!-- <Select :options="options" @selected="selected" /> -->

                <el-transfer
                  v-model="editForm.role"
                  :props="{
                    key: 'id',
                    label: 'remark',
                  }"
                  :data="formattedAumenus"
                >
                </el-transfer>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="姓名">
                <el-input
                  v-model="editForm.name"
                  placeholder="请填写姓名"
                  class="long"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="手机号" prop="phone">
                <el-input
                  v-model="editForm.phone"
                  placeholder="请填写手机号"
                  class="long"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="邮箱地址">
                <el-input
                  v-model="editForm.email"
                  placeholder="请填写邮箱地址"
                  class="long"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editpage = false">取消</el-button>
        <el-button type="primary" @click="edit_finish">完成</el-button>
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
                  <el-input
                    v-model="searchForm.username"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col v-if="isHW" :span="8">
                <el-form-item label="选择项目" class="select">
                  <el-select
                    v-model="searchForm.projectid"
                    placeholder="选择项目"
                  >
                    <el-option
                      v-for="option in projectoptions"
                      :key="option.id"
                      :label="option.projectName"
                      :value="option.projectId"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="邮箱地址">
                  <el-input
                    v-model="searchForm.email"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="8">
                <el-form-item label="手机号">
                  <el-input
                    v-model="searchForm.phonenumber"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="8">
                <el-form-item label="账号状态" class="select">
                  <el-select
                    v-model="searchForm.status"
                    placeholder="请选择账号状态"
                  >
                    <el-option label="全部" :value="2"></el-option>
                    <el-option label="正常" :value="1"></el-option>
                    <el-option label="冻结" :value="0"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item>
                  <el-button type="primary" @click="select">查询</el-button>
                  <el-button @click="reset">重置</el-button>
                  <el-button type="primary" @click="add">+新建</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>

        <!-- 列表 -->
        <div class="notification-list">
          <el-table
            :data="notificationList"
            height="320"
            style="width: 100%"
            :header-cell-style="{
              background: '#027DB4',
              color: 'white',
              textAlign: 'center',
              height: '20px',
            }"
          >
            <el-table-column type="selection" width="50"></el-table-column>

            <el-table-column
              prop="name"
              label="用户名"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="username"
              label="登录账号名"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="phonenumber"
              label="手机号"
              width="140"
            ></el-table-column>
            <el-table-column
              prop="email"
              label="邮箱"
              width="150"
            ></el-table-column>
            <el-table-column
              prop="remark"
              label="角色"
              width="130"
            ></el-table-column>

            <el-table-column
              prop="updateTime"
              label="上次登录时间"
              width="230"
            ></el-table-column>

            <el-table-column prop="status" label="账号状态" width="150">
              <template slot-scope="scope">
                <div style="text-align: center">{{ scope.row.status }}</div>
              </template>
            </el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="edit(scope.row)" type="text" size="small"
                  >编辑</el-button
                >
                <el-button @click="detail" type="text" size="small"
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
    </transition>
  </div>
</template>

<script>
import Select from "@/components/Select.vue";

import {
  ListUsers,
  ListAllProject,
  SelectUser,
  AddProjectUser,
  ListRolesByUserid,
} from "@/utils/api/Advanced_setting/AccountManage";
import { ListRoles } from "@/utils/api/Advanced_setting/RoleManage";
import { useUserStore } from "@/stores/user";
export default {
  components: {
    Select,
  },
  data() {
    return {
      roleoptions: [],
      editForm: {
        username: "",
        password: "",
        role: [],
        name: "",
        phone: "",
        email: "",
      },
      acForm: {
        username: "",
        password: "",
        role: [],
        name: "",
        phone: "",
        email: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入账户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        pwd: [
          { required: true, message: "请输入登陆密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        role: [
          { required: true, message: "请选择角色", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
      searchForm: {
        username: "",
        phonenumber: "",
        projectid: null,
        status: null,
        email: "",
      },
      projectoptions: [],
      notificationList: [],
      currentPage: 1,
      pageSize: 10,
      total: 100,
      dialogVisible: false,
      editpage: false,
      isHW: false,
    };
  },
  computed: {
    formattedAumenus() {
      return this.roleoptions.map((item) => {
        return {
          ...item.role,
          disabled:
            item.role.disabled === 0 || !(item.current < item.max)
              ? true
              : false,
        };
      });
    },
  },
  methods: {
    selected(value) {
      console.log(value);
      this.acForm.role = value;
      let str = value.join();
      console.log(str);
      // 注意选项为全部时数据里面的值为空字符串和无的情况
      if (value.includes("") || value.length === 0) {
        // console.log(Object.keys(this.optionsData).join());
      }
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },

    async select() {
      var data = JSON.stringify(this.searchForm);
      var res = await SelectUser(data);
      console.log(res);
      this.notificationList = res.data;
    },
    detail() {},
    async edit(row) {
      var roleid = row.id;
      console.log(row);
      this.editForm.username = row.username;
      this.editForm.password = row.password;
      this.editForm.name = row.name;
      this.editForm.phone = row.phonenumber;
      this.editForm.email = row.email;
      var res = await ListRolesByUserid(roleid);
      if (res.code == 200) {
        var roles = res.data;
        console.log(roles);
        for (var i = 0; i < roles.length; i++) {
          this.editForm.role.push(roles[i].id);
        }
      }
      console.log(res);

      // this.editForm.role=row.username
      this.editpage = true;
    },
    async add() {
      // 添加逻辑
      this.dialogVisible = true;

      // var res = await ListRoles()
      // if (res.code == 200) {

      // }
      // console.log(res);
    },
    async finish() {
      console.log(this.acForm);
      var data = JSON.stringify({
        user: {
          username: this.acForm.username,
          password: this.acForm.password,
          name: this.acForm.name,
          phonenumber: this.acForm.phone,
          email: this.acForm.email,
        },
        roleid: this.acForm.role,
      });
      console.log(data);
      var res = await AddProjectUser(data);
      if (res.code == 200) {
        this.$message.success("添加成功");
      } else {
        this.$message.error("添加失败");
      }
      console.log(res);
      this.dialogVisible = false;
    },
    edit_finish() {},
    reset() {
      this.searchForm.username = "";
      this.searchForm.phonenumber = "";
      this.searchForm.projectid = null;
      this.searchForm.status = null;
      this.searchForm.email = "";
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
  async created() {
    //未完成：判断当前账号是不是hw账号再进行请求
    const users = await ListUsers();
    console.log(users);
    this.notificationList = users.data;
    var res = await ListRoles();
    if (res.code == 200) {
      this.roleoptions = res.data;
      console.log("formattedAumenus:");
      console.log(this.formattedAumenus);
    }
    console.log(res);
    var userStore = useUserStore();
    if (userStore.userrole == "ROLE_HW") {
      this.isHW = true;
      const projects = await ListAllProject();
      if (projects.code == 200) {
        this.projectoptions = projects.data;
      }
      console.log(projects);
    }
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

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .long {
    width: 350px;
  }

  .bigtype {
    font-size: 17px;
  }
}
</style>
