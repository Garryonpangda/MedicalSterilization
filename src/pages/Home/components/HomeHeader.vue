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
    };
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
  },
};
</script>

<style scoped lang="scss">
#home_header {
  height: 50px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: #385b66;

  .icon {
    font-size: 26px;
    color: white;
    cursor: pointer;
  }

  .info {
    color: #fff;

    div {
      line-height: 32px;
    }
  }
}
</style>
