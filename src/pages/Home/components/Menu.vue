<template>
  <el-menu
    :default-active="this.$router.path"
    class="el-menu-vertical-demo"
    active-text-color="#fff"
    text-color="#fff"
    :collapse="isCollapse"
    router
    background-color="#0d0d0f"
  >
    <el-submenu index="1" v-if="menu('main_console')">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span>主控制台</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/screen">控制面板</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
   
    <el-submenu index="2" v-if="menu('reminder_list')">
      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span>提醒列表</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/malfunction">报障列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3" v-if="menu('data_analysis')">
      <template slot="title">
        <i class="el-icon-search"></i>
        <span>数据分析</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/analysis">数据板</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4" v-if="menu('mocha_itom')">
      <template slot="title">
        <i class="el-icon-notebook-1"></i>
        <span>运维管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          index="/home/devicemanage"
          v-if="menu('device_management')"
          >设备管理</el-menu-item
        >
        <el-menu-item
          index="/home/organizationmanage"
          v-if="menu('organization_management')"
          >组织管理</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="5" v-if="menu('advanced_setting')">
      <template slot="title">
        <i class="el-icon-notebook-2"></i>
        <span>高级设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/project" v-if="menu('project_management')"
          >项目管理</el-menu-item
        >
        <el-menu-item index="/home/role" v-if="menu('role_management')"
          >角色管理</el-menu-item
        >
        <el-menu-item index="/home/account" v-if="menu('account_management')"
          >账号管理</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>系统设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/changepassword">修改密码</el-menu-item>
        <el-menu-item index="/home/changephone">修改手机号</el-menu-item>
        <el-menu-item index="/home/changeemail">修改邮箱</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
import { useUserStore } from "@/stores/user";
export default {
  data() {
    return {
      isCollapse: true,
      user: null,
    };
  },
  computed: {},
  methods: {
    menu(au) {
      for (var i = 0; i < this.user.authorities.length; i++) {
        if (au === this.user.authorities[i].authority) {
          return true;
        }
      }
    },
  },
  created() {
    const userStore = useUserStore();
    this.user = userStore.userInfo;
  },
  mounted() {
    this.$bus.$on("changeMenuState", (value) => {
      this.isCollapse = true;
    });
  },
  beforeDestroy() {
    this.$bus.$off("changeMenuState");
  },
};
</script>

<style scoped lang="scss">
.el-menu {
  height: 100%;
  user-select: none;
  background-color: #0d0d0f;

  &-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  &-item.is-active {
    background-color: #8fbdc9 !important;
  }

  i {
    color: white;
  }
}
</style>
