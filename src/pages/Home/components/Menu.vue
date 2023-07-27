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
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-s-home"></i>
        <span>主控制台</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/control">控制面板</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-tickets"></i>
        <span>提醒列表</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/malfunction">报障列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-search"></i>
        <span>数据分析</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/analysis">数据板</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-notebook-1"></i>
        <span>运维管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/devicemanage">设备管理</el-menu-item>
        <el-menu-item index="/home/organizationmanage">组织管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-notebook-2"></i>
        <span>高级设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/home/project">项目管理</el-menu-item>
        <el-menu-item index="/home/role">角色管理</el-menu-item>
        <el-menu-item index="/home/account">账号管理</el-menu-item>
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
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  mounted() {
    this.$bus.$on("changeMenuState", (value) => {
      this.isCollapse = value;
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
