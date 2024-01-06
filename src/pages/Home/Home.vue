<template>
  <div class="home_page flex">
    <aside>
      <Menu />
    </aside>
    <section>
      <HomeHeader></HomeHeader>
      <div class="view flex">
        <el-card>
          <router-view></router-view>
        </el-card>
      </div>
    </section>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import HomeHeader from "./components/HomeHeader.vue";
export default {
  components: {
    Menu,
    HomeHeader,
  },
};
</script>

<style scoped lang="scss">
.home_page {
  height: 100vh;
  background-color: #027db4 !important;

  aside {
    height: 100%;
  }

  section {
    flex-grow: 1;

    .view {
      height: calc(100% - 50px);
      justify-content: center;
      align-items: center;
      background-color: #eee;

      .el-card {
        width: 98%;
        height: 97%;
        background-color: rgba(51, 51, 51, 1);
      }
    }
  }
}
</style>
