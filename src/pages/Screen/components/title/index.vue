<template>
  <div class="title">
    <p>海威消杀东南总代</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.title {
  width: 450px;
  height: 80px;
  margin-left: 20px;
  margin-top: 50px;
  background-color: rgba(1, 84, 120, 0.749019607843137);
  border-radius: 3%;
}
p {
  text-rendering: optimizeLegibility;
  font-size: 28px;
  color: white;
  font-weight: bold; /* Add bold style */
  padding-left: 20px;
  padding-top: 20px;
  font-kerning: normal
}
.home_page {
  height: 100vh;

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
        background-color: rgb(104, 4, 4) !important;
      }
    }
  }
}
</style>