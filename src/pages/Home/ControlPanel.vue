<template>
  <div class="home_page">
    <div class="background-carousel">
      主控制台
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home_page {
  height: 100vh;
  overflow: auto; /* 添加滚动条 */
  .background-carousel {
    position: relative;
    width: 100%;
    height: 700px;
    overflow: hidden;
 
  }
}
</style>
