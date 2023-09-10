<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>角色管理</p>
      <p class="secondtext">管理项目中所有角色</p>
    </div>
    <!-- 添加 -->
    <el-dialog title="基本信息" :visible.sync="firstpage" width="30%" :before-close="handleClose">
      <div>
        <el-form :model="roleForm" label-width="80px" :rules="rules">
          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="角色名称" prop="rolename">
                <el-input v-model="roleForm.rolename" placeholder="请填写角色名称" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="角色说明" prop="remark">
                <el-input v-model="roleForm.remark" placeholder="请填写角色说明" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="角色数量" prop="quantity">
                <el-input-number v-model="roleForm.quantity" label="角色数量"></el-input-number>
              </el-form-item>
            </el-col>
          </el-row>






        </el-form>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="firstpage = false">取消</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
      </span>
    </el-dialog>

    <el-dialog title="权限设置" :visible.sync="secondpage" width="35%" :before-close="handleClose">
      <div>
        <el-row>
          <span class="bigtype">菜单权限</span>
        </el-row>
        <el-row>
          <el-transfer :titles="['角色未拥有权限', '角色已拥有权限']" v-model="auForm.authorities" :props="{
            key: 'id',
            label: 'name',
            disabled: 'disabled'
          }" :data="formattedAumenus">
          </el-transfer>
        </el-row>






        <!-- <el-row class="top">
          <span class="bigtype">数据权限</span>
        </el-row>
        <el-row>
          <el-transfer :titles="['角色未拥有权限', '角色已拥有权限']" v-model="auForm.orgnizationids" :props="{
            key: 'id',
            label: 'name',

          }" :data="datamenus">
          </el-transfer>
        </el-row> -->


      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="secondpage = false">取消</el-button>
        <el-button type="primary" @click="secondpage = false; firstpage = true">上一步</el-button>
        <el-button type="primary" @click="finish">完成</el-button>
      </span>
    </el-dialog>




    <!-- 编辑 -->
    <el-dialog title="基本信息" :visible.sync="edit_firstpage" width="30%" :before-close="handleClose">
      <div>
        <el-form :model="edit_roleForm" label-width="80px" :rules="rules">
          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="角色名称" prop="rolename">
                <el-input v-model="edit_roleForm.rolename" placeholder="请填写角色名称" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="角色说明" prop="remark">
                <el-input v-model="edit_roleForm.remark" placeholder="请填写角色说明" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="角色数量" prop="quantity">
                <el-input-number v-model="edit_roleForm.quantity" label="角色数量"></el-input-number>
              </el-form-item>
            </el-col>
          </el-row>






        </el-form>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edit_firstpage = false">取消</el-button>
        <el-button type="primary" @click="edit_firstpage = false, edit_secondpage = true">下一步</el-button>
      </span>
    </el-dialog>
    <el-dialog title="权限编辑" :visible.sync="edit_secondpage" width="35%" :before-close="handleClose">
      <div>
        <el-row>
          <span class="bigtype">菜单权限</span>
        </el-row>
        <el-row>
          <el-transfer :titles="['角色未拥有权限', '角色已拥有权限']" v-model="edit_auForm.authorities" :props="{
            key: 'id',
            label: 'name',
            disabled: 'disabled'
          }" :data="formattedAumenus">
          </el-transfer>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edit_secondpage = false">取消</el-button>
        <el-button type="primary" @click="edit_secondpage = false; edit_firstpage = true">上一步</el-button>
        <el-button v-if="!isHW" type="primary" @click="edit_finish">完成</el-button>
      </span>
    </el-dialog>

    <!-- 顶部盒子 -->
    <div class="bigbox">
      <!-- 搜索条件 -->
      <div class="search-box">
        <el-form :model="searchForm" label-width="100px">
          <el-row v-if="isHW" :gutter="15">
            <el-col :span="10">
              <el-form-item label="选择项目" class="select">
                <el-select v-model="searchForm.projectid" placeholder="选择项目">
                  <el-option v-for="option in projectOptions" :key="option.projectId" :label="option.projectName"
                    :value="option.projectId">

                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <el-button type="primary" @click="select">查询</el-button>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="!isHW" :gutter="10">
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
        <el-table :data="notificationList" height="300" width="100%" :header-cell-style="{
          background: '#027DB4',
          color: 'white',
        }">
          <el-table-column type="selection" width="65"></el-table-column>

          <el-table-column prop="role.roleName" label="角色名称" width="283"></el-table-column>
          <el-table-column prop="role.remark" label="说明" width="150"></el-table-column>
          <el-table-column prop="role.createTime" label="创建时间" width="180"></el-table-column>
          <el-table-column prop="role.updateTime" label="更新时间" width="180"></el-table-column>
          <el-table-column label="账户数量" width="180">
            <template slot-scope="scope">({{ scope.row.current }}/{{ scope.row.max }})</template>
          </el-table-column>



          <el-table-column label="其他" width="230px">
            <template slot-scope="scope">
              <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
              <el-button @click="authorization(scope.row)" type="text" size="small">功能授权</el-button>
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
import { ListAllProject, ListRoles, ListRolesByProjectid, ListAllMenus, AddRole, ListMenusByRoleid, UpdateRole } from "@/utils/api/Advanced_setting/RoleManage"
import { ListAllOrgnization } from '@/utils/api/Mocha_itom/Organization'
import { useUserStore } from "@/stores/user"
export default {
  data() {
    return {

      datamenus: [],
      aumenus: [
      ],
      roleForm: {
        rolename: "",
        remark: "",
        quantity: null
      },
      auForm: {
        authorities: [],
        // orgnizationids: [],
      },

      edit_roleForm: {
        rolename: "",
        remark: "",
        quantity: null
      },
      edit_auForm: {
        authorities: [],
        // orgnizationids: [],
      },
      searchForm: {
        projectid: null,
      },
      rules: {
        rolename: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
        ],
        remark: [
          { required: true, message: '请输入角色说明', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        quantity: [
          { required: true, message: '请输入', trigger: 'blur' },

        ],

      },
      projectOptions: [],
      notificationList: [],
      currentPage: 1,
      pageSize: 10,
      total: 100,
      isHW: false,
      firstpage: false,
      secondpage: false,
      edit_firstpage: false,
      edit_secondpage: false,
    };
  },
  computed: {
    formattedAumenus() {
      return this.aumenus.map(item => {
        return {
          ...item,
          disabled: item.disabled === 0 ? true : false
        };
      });
    }
  },
  methods: {
    async finish() {
      var data = JSON.stringify({
        'role': {
          'roleName': this.roleForm.rolename,
          'remark': this.roleForm.remark
        },
        "authorities": this.auForm.authorities,
        "quantity": this.roleForm.quantity,
        // "orgnizationids": this.auForm.orgnizationids,暂时不考虑

      })
      var res = AddRole(data)
      if (res.code == 200) {
        this.$message.success("添加成功");
      } else {
        this.$message.error("添加失败");
      }
      console.log(res);
      this.secondpage = false
    },
    async next() {

      // var res = await ListAllOrgnization()
      // if (res.code == 200) {
      //   var orgnizations = []
      //   for (var i = 0; i < res.data.length; i++) {
      //     orgnizations.push(res.data[i].orgnization)
      //   }

      //   this.datamenus = orgnizations
      // }
      // console.log(res);
      this.firstpage = false
      this.secondpage = true
    },
    async edit_finish() {
      var data = JSON.stringify({
        'role': {
          'roleName': this.edit_roleForm.rolename,
          'remark': this.edit_roleForm.remark,
          'delFlag': this.edit_roleForm.delFlag,
          'createTime': this.edit_roleForm.createTime,
          'updateTime': this.edit_roleForm.updateTime,
          'id': this.edit_roleForm.id
        },
        "authorities": this.edit_auForm.authorities,
        "quantity": this.edit_roleForm.quantity,
      })

      var res = await UpdateRole(data)
      if (res.code == 200) {
        this.$message.success("修改成功");
      }
      console.log(res);
      this.secondpage = false
      this.edit_secondpage = false
    },
    async select() {
      var res = await ListRolesByProjectid(this.searchForm.projectid)
      if (res.code == 200) {
        this.notificationList = res.data
      }
      console.log(res);
    },
    add() {
      // 添加逻辑
      this.firstpage = true
    },
    async edit(row) {

      var current_role = row.role
      this.edit_roleForm.rolename = current_role.roleName
      this.edit_roleForm.quantity = row.max
      this.edit_roleForm.remark = current_role.remark
      this.edit_roleForm.delFlag = current_role.delFlag
      this.edit_roleForm.createTime = current_role.createTime
      this.edit_roleForm.updateTime = current_role.updateTime
      this.edit_roleForm.id = current_role.id

      var res = await ListMenusByRoleid(row.role.id)
      if (res.code == 200) {
        this.edit_auForm.authorities = []
        for (var i = 0; i < res.data.length; i++) {
          this.edit_auForm.authorities.push(res.data[i].id)
        }

      }
      console.log(res);
      this.edit_firstpage = true
    },
    authorization() {
      //授权码
    },
    userlist() {
      //用户列表
    },
    handleDetail(row) {

    },
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
  },
  async created() {
    var userStore = useUserStore()
    var role = userStore.userrole
    if (role === "ROLE_HW") {
      this.isHW = true
      var res = await ListAllProject()
      if (res.code == 200) {
        this.projectOptions = res.data
      }
      console.log(res);
    }
    var res = await ListRoles()
    if (res.code == 200) {
      this.notificationList = res.data
    }
    console.log(res);

    var res = await ListAllMenus()
    if (res.code == 200) {
      this.aumenus = res.data
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
    position: relative;

    .el-select {
      width: 450px;
    }

    .el-form-item__label {
      color: white;

    }

    .new {
      margin-left: -72px;
    }
  }

  .notification-list {
    .el-pagination {
      margin-top: 5px;
    }
  }

  .top {
    margin-top: 30px;
  }

  .bigtype {
    font-size: 17px;
  }
}
</style>
