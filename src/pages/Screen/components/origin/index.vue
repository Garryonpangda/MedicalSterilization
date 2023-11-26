<template>
  <div class="box6">
    <div class="title">
      <img src="@/assets/img/setting.png"  />
      <p>使用情况</p>
    </div>
    <div class="data-group">
      <div class="data-box">
        <p class="data-title1">今日次数</p>
        <p class="data-value1">20000次</p>
      </div>
      <div class="data-box">
        <p class="data-title2">单日平均次数</p>
        <p class="data-value2">40000次</p>
      </div>
    </div>
    <div class="data-group">
      <div class="data-box">
        <p class="data-title3">累计次数</p>
        <p class="data-value3">2023112次</p>
      </div>
      <div class="data-box">
        <p class="data-title4">累计时间</p>
        <p class="data-value4">2123123123秒</p>
      </div>
    </div>
    <el-divider></el-divider>
    <p class="update-time">更新时间：2023-08-11 15:30</p>
  </div>
</template>

<script>
// ... Your script
</script>

<style scoped lang="scss">
.box6 {
  width: 100%;
  height: 100%;
  background-color: rgba(1, 84, 120, 0.749019607843137);
  margin-top: 10px;
   margin-left: 20px;
  .title {
    display: flex;
    align-items: center;
    margin-left: 5px;

    img {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }

    p {
      color: rgb(255, 255, 255);
      font-size: 23px;
    }
  }

  .data-group {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .data-box {
    text-align: center;

    .data-title1,
    .data-title3 {
      color: rgb(255, 255, 255);
      font-size: 23px;
      margin-left: 40px;
      text-rendering: optimizeLegibility
    }
  .data-title2,
    .data-title4 {
      color: rgb(255, 255, 255);
      font-size: 23px;
      margin-right: 40px;
      text-rendering: optimizeLegibility
    }
    .data-value1,.data-value3 {
      color: rgb(0, 180, 255);
      font-size: 24px;
      margin-top: 5px;
      margin-left: 20px;
    }
      .data-value2,.data-value4 {
      color: rgb(0, 180, 255);
      font-size: 24px;
      margin-top: 5px;
      margin-right: 20px;
    }
  }

  .update-time {
    margin-top: -15px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    padding-left: 5px;
  }
}
</style>
