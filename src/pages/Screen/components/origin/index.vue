<template>
  <div class="box6">
    <div class="title">
      <img src="@/assets/img/setting.png" />
      <p>使用情况</p>
    </div>
    <div class="data-group">
      <div class="data-box">
        <p class="data-title1">今日次数</p>
        <p class="data-value1">{{usage.intraday_total_time}}次</p>
      </div>
      <div class="data-box">
        <p class="data-title2">单日平均次数</p>
        <p class="data-value2">{{usage.avg_total_time}}次</p>
      </div>
    </div>
    <div class="data-group">
      <div class="data-box">
        <p class="data-title3">累计次数</p>
        <p class="data-value3">{{usage.total_time}}次</p>
      </div>
      <div class="data-box">
        <p class="data-title4">累计时间</p>
        <p class="data-value4">{{usage.total_duration}}秒</p>
      </div>
    </div>
    <el-divider></el-divider>
    <p class="update-time">更新时间：{{ time }}</p>
  </div>
</template>

<script>

import { UsageCondition } from "@/utils/api/System_Api/System_Api"
export default {
  data() {
    return {
      time: null,
      usage: {
        "total_duration": 82,
        "total_time": 9,
        "intraday_total_time": 1,
        "avg_total_time": 1.8
      }
    };
  },
  async created() {
    this.time = this.getCurrentDateTimeString()
    var res = await UsageCondition()
    if (res.code == 200) {
      this.usage = res.data
    }
    console.log(res);
  },

  methods: {
    getCurrentDateTimeString() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}`;
    },
  }

}
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

    .data-value1,
    .data-value3 {
      color: rgb(0, 180, 255);
      font-size: 24px;
      margin-top: 5px;
      margin-left: 20px;
    }

    .data-value2,
    .data-value4 {
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
