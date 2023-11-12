<template>
  <div class="notification-page">
    <!-- 创建项目 -->
    <el-dialog
      title="添加项目"
      :visible.sync="firstpage"
      width="30%"
      :before-close="handleClose"
      status-icon
    >
      <div>
        <div>
          <el-form :model="projectForm" label-width="80px" :rules="rules">
            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="项目ID" prop="projectId">
                  <el-input
                    v-model="projectForm.projectId"
                    placeholder="请输入"
                    class="long"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="项目名称" prop="projectName">
                  <el-input
                    v-model="projectForm.projectName"
                    placeholder="请输入"
                    class="long"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="说明">
                  <el-input
                    v-model="projectForm.remark"
                    placeholder="请输入"
                    class="long"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="firstpage = false">取消</el-button>
          <el-button type="primary" @click="next">下一步</el-button>
        </span>
      </div>
    </el-dialog>

    <!-- 创建账户 -->
    <el-dialog
      title="创建初始账户"
      :visible.sync="secondpage"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <div>
          <el-form :model="acForm" label-width="80px" :rules="rules">
            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="账户名" prop="username">
                  <el-input
                    v-model="acForm.username"
                    placeholder="请输入"
                    class="long"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="密码" prop="pwd">
                  <el-input
                    v-model="acForm.password"
                    placeholder="请输入"
                    class="long"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="姓名">
                  <el-input
                    v-model="acForm.name"
                    placeholder="请输入"
                    class="long"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="手机号" prop="phone">
                  <el-input
                    v-model="acForm.phonenumber"
                    placeholder="请输入"
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
                    placeholder="请输入"
                    class="long"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="secondpage = false">取消</el-button>
          <el-button type="primary" @click="retreat">上一步</el-button>
          <el-button type="primary" @click="finish">完成</el-button>
        </span>
      </div>
    </el-dialog>

    <!-- 编辑项目 -->
    <el-dialog
      title="编辑项目"
      :visible.sync="editpage"
      width="30%"
      :before-close="handleClose"
    >
      <div>
        <div>
          <el-form :model="editproject" label-width="80px">
            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="项目ID">
                  <div>{{ editproject.projectId }}</div>
                  <!-- <el-input v-model=""  class="long"></el-input> -->
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="项目名称">
                  <el-input
                    v-model="editproject.projectName"
                    class="long"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="15">
              <el-col :span="400">
                <el-form-item label="说明">
                  <el-input
                    v-model="editproject.remark"
                    class="long"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="deleteproject">移除项目</el-button>
          <el-button type="primary" @click="edit_finish" class="right"
            >完成</el-button
          >
          <el-button @click="editpage = false" class="right">取消</el-button>
        </span>
      </div>
    </el-dialog>

    <!-- 删除项目 -->

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
                <el-button type="primary" @click="add" class="new"
                  >新建</el-button
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <!-- 列表 -->
      <div class="notification-list">
        <el-table
          :data="notificationList"
          :height="400"
         style="width: 100%"
          :header-cell-style="{
            background: '#027DB4',
            color: 'white',
          }"
        >
          <el-table-column type="selection" width="65"></el-table-column>

          <el-table-column
            prop="projectId"
            label="项目ID"
            width="200"
          ></el-table-column>
          <el-table-column
            prop="projectName"
            label="项目名称"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="remark"
            label="说明"
            width="250"
          ></el-table-column>
          <el-table-column
            prop="creatTime"
            label="创建时间"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="updateTime"
            label="更新时间"
            width="283"
          ></el-table-column>

          <el-table-column label="其他" >
            <template slot-scope="scope">
              <el-button @click="edit(scope.row)" type="text" size="small"
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
import Select from "@/components/Select.vue";
import {
  ListAllProject,
  DeleteProject,
  AddProject,
  CheckProjectId,
  CheckProjectName,
  CheckUserName,
} from "@/utils/api/Advanced_setting/ProjectManage";

export default {
  components: {
    Select,
  },
  data() {
    var checkprojectid = async (rule, value, callback) => {
      const regex = /^[0-9]+$/;

      if (value === "") {
        callback(new Error("请输入项目ID"));
        return;
      } else if (!regex.test(value)) {
        callback(new Error("请输入数字"));
        return;
      } else {
        const res = await CheckProjectId(value);
        if (res.code == 200) {
          if (res.data == true) {
            callback();
            return;
          } else {
            callback(new Error("该项目ID已存在"));
          }
        } else {
          callback(new Error("Network Error"));
        }
      }
    };

    var checkprojectname = async (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入项目名称"));
        return;
      } else {
        const res = await CheckProjectName(value);
        if (res.code == 200) {
          if (res.data == true) {
            callback();
            return;
          } else {
            callback(new Error("该项目名称已存在"));
          }
        } else {
          callback(new Error("Network Error"));
        }
      }
    };

    var checkusername = async (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入项目ID"));
        return;
      } else {
        const res = await CheckUserName(value);
        if (res.code == 200) {
          if (res.data == true) {
            callback();
            return;
          } else {
            callback(new Error("该账户名已存在"));
          }
        } else {
          callback(new Error("Network Error"));
        }
      }
    };
    return {
      options: [
        {
          value: "001",
          label: "黄金糕",
          check: false,
        },
        {
          value: "002",
          label: "双皮奶",
          check: false,
        },
        {
          value: "003",
          label: "蚵仔煎",
          check: false,
        },
        {
          value: "004",
          label: "龙须面",
          check: false,
        },
        {
          value: "005",
          label: "北京烤鸭",
          check: false,
        },
      ],
      searchForm: {},
      rules: {
        projectId: [
          { validator: checkprojectid, trigger: "blur" },
          { required: true, trigger: "blur" },
        ],
        projectName: [
          { validator: checkprojectname, trigger: "blur" },
          { required: true, message: "请输入项目名称", trigger: "blur" },
        ],
        username: [
          { validator: checkusername, trigger: "blur" },
          { required: true, message: "请输入账户名", trigger: "blur" },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          // { pattern: /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/, message: '请输入正确的手机号', trigger: "blur" },
        ],
      },
      acForm: {
        username: "",
        password: "",
        name: "",
        phonenumber: "",
        email: "",
      },
      projectForm: {
        projectId: "",
        projectName: "",
        remark: "",
      },

      editproject: {
        projectId: "",
        projectName: "",
        remark: "",
      },
      notificationList: [
        {
          projectID: "1",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
        },
        {
          projectID: "2",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
        },
        {
          projectID: "3",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
        },
        {
          projectID: "4",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
        },
        {
          projectID: "5",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
        },
        {
          projectID: "6",
          projectName: "海威华南地区总代",
          explain: "负责人：张总",
          createTime: "2021/9/9 18:00",
          updateTime: "2022/9/9 18:00",
        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 100,
      firstpage: false,
      secondpage: false,
      editpage: false,
    };
  },
  methods: {
    deleteproject() {
      this.$prompt("请输入特殊密码", "移除项目", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",

        inputErrorMessage: "请输入特殊密码",
        type: "error",
      })
        .then(({ value }) => {
          //发请求
          DeleteProject(this.editproject.projectId, value)
            .then((response) => {
              console.log(response.data); // 访问响应数据
              if (response.code == 200) {
                //删除成功
                this.$message({
                  type: "success",
                  message: "删除成功: ",
                });
              } else if (response.code == 201) {
                //删除失败
                this.$message({
                  type: "error",
                  message: "删除失败",
                });
              }
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消移除项目",
          });
        });
    },

    edit_finish() {
      this.editpage = false;
    },
    edit(project) {
      this.editpage = true;
      this.editproject = project;
    },
    selected(value) {
      console.log(value);
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
    finish() {
      var data = JSON.stringify({
        project: this.projectForm,
        user: this.acForm,
      });
      console.log(data);
      AddProject(data)
        .then((response) => {
          console.log(response);
          if (response.code == 200) {
            this.$message({
              type: "success",
              message: "添加成功",
            });
          } else if (response.code == 201) {
            this.$message({
              type: "error",
              message: "添加失败",
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });

      this.secondpage = false;

      //处理逻辑
    },
    retreat() {
      this.secondpage = false;
      this.firstpage = true;
    },
    next() {
      this.firstpage = false;
      this.secondpage = true;
    },
    add() {
      // 添加逻辑
      this.firstpage = true;
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
    const res = await ListAllProject();
    this.notificationList = res.data;
    console.log(res);
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

  .long {
    width: 350px;
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

    .new {
      margin-left: -80px;
      margin-top: 10px;
    }
  }

  .notification-list {
    .el-pagination {
      margin-top: 5px;
    }
  }

  .right {
    float: right;
  }
}
</style>
