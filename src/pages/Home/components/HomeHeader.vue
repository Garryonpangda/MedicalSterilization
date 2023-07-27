<template>
  <div class="flex" id="home_header">
    <div class="icon">
      <i
        class="el-icon-s-fold"
        v-show="!isCollapse"
        @click="changeMenuState"
      ></i>
      <i
        class="el-icon-s-unfold"
        v-show="isCollapse"
        @click="changeMenuState"
      ></i>
      <i class="el-icon-arrow-left" @click="goback"></i>
      <i class="el-icon-refresh-right" @click="refresh">
      </i>
    </div>

    <div class="nav">
      <el-breadcrumb separator="/">
        <!-- 预设一个首面包屑 -->
        <el-breadcrumb-item>
          <span class="pingtai">平台</span>
        </el-breadcrumb-item>
        <!--  循环遍历面包屑列表 -->
        <el-breadcrumb-item
          :to="{ path: item.path }"
          v-for="(item, index) in breadList"
          :key="index"
        >
          <span> {{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="info flex">
      <div>{{ timeStr }}</div>
      <div class="vertical_line"></div>
      <div>欢迎 {{ "admin" }}</div>
      <div class="vertical_line"></div>
      <el-button
        type="text"
        icon="el-icon-switch-button"
        size="medium"
        style="margin-right: 10px; color: aliceblue"
        @click="loginOut"
        >退出</el-button
      >
    </div>
  </div>
</template>

<script>
import { getCurTimeMixin } from "@/mixin/time.js";
export default {
  mixins: [getCurTimeMixin],
  data() {
    return {
      isCollapse: false,
      breadList: [],
    };
  },
  created() {
    this.getBreadcrumb();
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    changeMenuState() {
      this.isCollapse = !this.isCollapse;
      this.$bus.$emit("changeMenuState", this.isCollapse);
    },
    loginOut() {
      this.$message.success({
        message: "退出成功！",
        center: true,
      });
      this.$router.push("/login");
    },
    getBreadcrumb() {
      console.log(this.$route.matched); //可以获取上下文路由 也就是可以获取父亲和孩子路由组成的数组
      if (Object.keys(this.$route.matched[0].meta).length > 0) {
        this.breadList = this.$route.matched;
      } else {
        this.breadList = [];
      }
    },
    goback(){
        this.$router.go(-1);
    },
    refresh(){

    }
  },
};
</script>

<style scoped lang="scss">
#home_header {
  height: 50px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: #0d0d0f;

  .icon {
    font-size: 26px;
    color: white;
    cursor: pointer;
    .el-icon-arrow-left{
      margin-left: 20px;
    }
    .el-icon-refresh-right{
      margin-left: 20px;
    }

  }

  .info {
    color: #fff;

    div {
      line-height: 32px;
    }
  }
  .backTo {
    width: 200px;
    height: 30px;
    background-color: aquamarine;
    .el-icon-edit {
      width: 200px;
      margin-top: 300px;
    }
  }
  .nav {
    width: 250px;
    height: 35px;
    margin-left: -320px;
    padding-top: 17px;
    span {
      color: white;
      font-size: 15px;
    }
  }
}
</style>
