<template>
  <div class="notification-page">
    <div class="bigtitle">
      <p>项目设备</p>
      <p class="secondtext">项目中设备、设备组列表及配置</p>
    </div>
    <!-- add -->
    <el-dialog title="添加设备" :visible.sync="addVisible" width="30%" :before-close="handleClose">
      <div>
        <el-form :model="deviceForm" label-width="80px" :rules="rules">
          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="SN码" prop="SN">
                <el-input v-model="deviceForm.SN" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="名称" prop="name">
                <el-input v-model="deviceForm.device_name" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="400">
              <el-form-item label="地址" prop="name">
                <el-input v-model="deviceForm.locate" placeholder="请输入内容" class="long"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row :gutter="15" v-if="!isOA">
            <el-col :span="400">
              <el-form-item label="选择组织" class="select" prop="organizationid">
                <el-select v-model="deviceForm.organizationid" placeholder="选择组织" class="long">
                  <el-option v-for="option in orgnizationOptions" :key="option.orgnization.id"
                    :label="option.orgnization.name" :value="option.orgnization.id"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>

      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取消</el-button>
        <el-button type="primary" @click="addfinish">完成</el-button>
      </span>
    </el-dialog>

    <!-- adds -->
    <el-dialog title="批量添加设备" :visible.sync="addsVisible" width="30%" :before-close="handleClose">
      <div>
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1" @click.native="on_click(0)"></el-step>
          <el-step title="步骤 2" @click.native="on_click(1)"></el-step>
          <el-step title="步骤 3" @click.native="on_click(2)"></el-step>
        </el-steps>
        <div v-show="active == 0" class="stepbox">
          第一步：下载模板
        </div>
        <div v-show="active == 1">
          第二步：上传Excel
        </div>
        <div v-show="active == 2">
          第三步：导入设备
        </div>



      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addsVisible = false">取消</el-button>
        <el-button type="primary" v-show="active != 0" @click="previous">上一步</el-button>
        <el-button type="primary" v-show="active != 3" @click="next">下一步</el-button>
        <el-button type="primary" v-show="active == 3" @click="addsfinish">完成</el-button>
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
                <el-input v-model="searchForm.sn" placeholder="请输入设备名称"></el-input>
              </el-form-item>
            </el-col>
            <div v-if="!isOA">
              <el-col :span="6">
                <el-form-item label="组织">
                  <el-select v-model="searchForm.organizationid" placeholder="请选择提醒类型">
                    <el-option v-for="option in orgnizationOptions" :key="option.orgnization.id"
                      :label="option.orgnization.name" :value="option.orgnization.id"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </div>

            <el-col :span="6">
              <el-form-item label="属性">
                <el-select v-model="searchForm.attribute" placeholder="请选择">
                  <el-option label="初始" :value=2></el-option>
                  <el-option label="未激活" :value=0></el-option>
                  <el-option label="已激活" :value=1></el-option>

                  <el-option label="全部" :value=null></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="状态">
                <el-select v-model="searchForm.status" placeholder="请选择">
                  <el-option label="在线" :value=1></el-option>
                  <el-option label="离线" :value=0></el-option>
                  <el-option label="全部" :value=null></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="名称">
                <el-input v-model="searchForm.name" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="12">
              <el-form-item>
                <el-button type="primary" @click="handleSearch">查询</el-button>
                <el-button @click="handleReset">重置</el-button>
                <el-button v-if="!isHW" type="primary" @click="adddevice">添加设备</el-button>
                <el-button v-if="!isHW" type="primary" @click="batchadd">批量添加</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <!-- 列表 -->
      <div class="notification-list">
        <el-table :data="notificationList" height="350" style="width: 100%" :header-cell-style="{
          background: '#027DB4',
          color: 'white',
          textAlign: 'center',

        }">
          <el-table-column type="selection" width="65"></el-table-column>
          <el-table-column prop="device.sn" label="SN码" width="150"></el-table-column>
          <el-table-column prop="device.deviceName" label="名称" width="120"></el-table-column>
          <el-table-column prop="device.attribute" label="属性" width="90">
            <template slot-scope="scope">
              <span v-if="scope.row.device.attribute === 0">已激活</span>
              <span v-else-if="scope.row.device.attribute === 1">未激活</span>
              <span v-else-if="scope.row.device.attribute === 2">初始</span>
            </template>
          </el-table-column>
          <el-table-column prop="device.status" label="状态" width="90">
            <template slot-scope="scope">
              <span v-if="scope.row.device.status === 0">离线</span>
              <span v-else-if="scope.row.device.status === 1">在线</span>
            </template>
          </el-table-column>
          <el-table-column prop="orgnizationname" label="组织" width="233"></el-table-column>
          <el-table-column prop="device.cout" label="使用次数" width="100"></el-table-column>
          <el-table-column prop="device.duration" label="使用时长(秒)" width="120"></el-table-column>
          <el-table-column prop="device.cout" label="预计次数" width="100"></el-table-column>

          <el-table-column label="其他">
            <template slot-scope="scope" >
              <div class="button-container">
                <el-button @click="userecord(scope.row)" type="text" size="small">使用记录</el-button>
                <el-button @click="mianrecord(scope.row)" type="text" size="small">维护记录</el-button>
                <el-button @click="handleDetail(scope.row)" type="text" size="small">详情</el-button>
              </div>
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
import { ListAllOrgnization, SelectDevice, ListDevice, AddDevice } from "@/utils/api/Mocha_itom/DeviceManage"
import { useUserStore } from "@/stores/user"
export default {
  data() {
    return {
      active: 0,
      searchForm: {
        sn: null,
        organizationid: null,
        attribute: null,
        status: null,
        name: null,


      },
      deviceForm: {
        SN: "",
        organizationid: null,
        device_name: "",
        locate: "",
      },

      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        SN: [
          { required: true }
        ],
        organizationid: [
          { required: true }
        ],
      },
      orgnizationOptions: [],
      notificationList: [
        {
          device: {
            "id": 1,
            "deviceName": "设备1",
            "locate": "locate1",
            "status": 1,
            "duration": 0,
            "cout": 0,
            "temperature": 0,
            "uv": 0,
            "mode": 0,
            "sn": 1,
            "attribute": 1

          },
          orgnizationname: "组织"
        },
        {
          device: {
            "id": 1,
            "deviceName": "设备1",
            "locate": "locate1",
            "status": 1,
            "duration": 0,
            "cout": 0,
            "temperature": 0,
            "uv": 0,
            "mode": 0,
            "sn": 1,
            "attribute": 1

          },
          orgnizationname: "组织"
        },
        {
          device: {
            "id": 1,
            "deviceName": "设备1",
            "locate": "locate1",
            "status": 1,
            "duration": 0,
            "cout": 0,
            "temperature": 0,
            "uv": 0,
            "mode": 0,
            "sn": 1,
            "attribute": 1
          },
          orgnizationname: "组织"
        },
        {
          device: {
            "id": 1,
            "deviceName": "设备1",
            "locate": "locate1",
            "status": 1,
            "duration": 0,
            "cout": 0,
            "temperature": 0,
            "uv": 0,
            "mode": 0,
            "sn": 1,
            "attribute": 1

          },
          orgnizationname: "组织"
        },
        {
          device: {
            "id": 1,
            "deviceName": "设备1",
            "locate": "locate1",
            "status": 1,
            "duration": 0,
            "cout": 0,
            "temperature": 0,
            "uv": 0,
            "mode": 0,
            "sn": 1,
            "attribute": 1

          },
          orgnizationname: "组织"
        },
        {
          device: {
            "id": 1,
            "deviceName": "设备1",
            "locate": "locate1",
            "status": 1,
            "duration": 0,
            "cout": 0,
            "temperature": 0,
            "uv": 0,
            "mode": 0,
            "sn": 1,
            "attribute": 1

          },
          orgnizationname: "组织"
        },
      ],
      currentPage: 1,
      pageSize: 10,
      total: 100,
      addVisible: false,
      addsVisible: false,
      isHW: false,
      isOA: false
    };
  },
  methods: {
    previous() {
      console.log(this.active)
      if (this.active-- < 2) {
        this.active = 0;
      }
    },
    on_click(e) {
      console.log(e);
      if (e != "" || e != null) { this.active = e }
    },

    next() {
      console.log(this.active)
      if (this.active++ > 2) {
        this.active = 0;
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },

    async addfinish() {
      //处理添加逻辑
      var data = JSON.stringify(this.deviceForm)
      var res = await AddDevice(data)
      if (res.code == 200) {
        this.$message.success("添加成功");
      }
      console.log(res);
      this.addVisible = false;

    },

    addsfinish() {
      //处理添加逻辑


      this.addsVisible = false;

    },
    async handleSearch() {
      // 处理搜索逻辑
      var data = JSON.stringify(this.searchForm)
      var res = await SelectDevice(data)
      if (res.code == 200) {
        this.notificationList = res.data
      }
      console.log(data);
      console.log(res);

    },
    handleReset() {
      this.searchForm.attribute = null
      this.searchForm.name = null
      this.searchForm.sn = null
      this.searchForm.organizationid = null
      this.searchForm.status = null
      // 处理重置逻辑
    },
    adddevice() {

      this.addVisible = true;
      // 添加设备逻辑
    },
    batchadd() {
      // 批量添加逻辑
      this.addsVisible = true;
    },
    handleDetail(row) { },
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },
  },
  async created() {
    var res = await ListDevice()
    if (res.code == 200) {
      this.notificationList = res.data
    }

    console.log(res);
    var userStore = useUserStore()
    var role = userStore.userrole
    console.log(role);
    if (role === "ROLE_HW") {
      this.isHW = true
      this.isOA = false
      var res = await ListAllOrgnization()
      if (res.code == 200) {
        this.orgnizationOptions = res.data

      }

      console.log(res);
      return
    } else if (role === "ROLE_OA") {
      this.isHW = false
      this.isOA = true
      this.deviceForm.organizationid = this.notificationList[0].orgnizationid

      return
    } else if (role === "ROLE_PA") {
      var res = await ListAllOrgnization()
      this.isHW = false
      this.isOA = false
      if (res.code == 200) {
        this.orgnizationOptions = res.data
      }
      console.log(res);
      return
    }
    return

  }

};
</script>

<style scoped lang="scss">
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* 可根据需要设置高度 */
}

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


  .long {
    width: 350px;
  }
}
</style>
