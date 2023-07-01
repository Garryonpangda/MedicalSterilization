<template>
  <el-menu
    :default-active="this.$router.path"
    class="el-menu-vertical-demo"
    active-text-color="#fff"
    text-color="#fff"
    background-color="#385b66"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/home">
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/home/quakedb">
      <i class="el-icon-menu"></i>
      <span slot="title">地震数据库</span>
    </el-menu-item>
    <el-menu-item index="/home/sequence">
      <i class="el-icon-menu"></i>
      <span slot="title">生成地震序列</span>
    </el-menu-item>
    <el-menu-item index="/home/trainmodel">
      <i class="el-icon-menu"></i>
      <span slot="title">训练模型</span>
    </el-menu-item>
    <el-menu-item index="/home/prediction">
      <i class="el-icon-menu"></i>
      <span slot="title">最大余震预测</span>
    </el-menu-item>
    <el-menu-item index="/home/statis">
      <i class="el-icon-menu"></i>
      <span slot="title">数据统计</span>
    </el-menu-item>
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

  &-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  &-item.is-active {
    background-color: #8fc9ae !important;
  }

  i {
    color: white;
  }
}
</style>
