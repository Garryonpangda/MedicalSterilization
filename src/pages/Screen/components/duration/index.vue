<template>
  <div class="box6">
    <div class="title">
      <img src="@/assets/img/setting.png" />
      <p>维保情况</p>
    </div>
    <div class="data-group">
      <div class="data-box">
        <p class="data-title1">工单总数</p>
        <p class="data-value1">{{maintenance.maintenance_count}}项</p>
      </div>
      <div class="data-box">
        <p class="data-title2">已完成</p>
        <p class="data-value2">{{maintenance.maintenance_handled_count}}项</p>
      </div>
    </div>
    <div class="data-group">
      <div class="data-box">
        <p class="data-title3">处理中</p>
        <p class="data-value3">{{maintenance.maintenance_handling_count}}项</p>
      </div>
      <div class="data-box">
        <p class="data-title4">待处理</p>
        <p class="data-value4">{{maintenance.maintenance_unhandle_count}}项</p>
      </div>
    </div>



    <el-divider></el-divider>
    <p class="update-time">更新时间：{{ time }}</p>
  </div>
</template>

<script>
import {MaintenanceCondition } from "@/utils/api/System_Api/System_Api"
export default {
  data() {
    return {
      time: null,
      maintenance: {
        "maintenance_count": 4,
        "maintenance_unhandle_count": 2,
        "maintenance_handled_count": 1,
        "maintenance_handling_count": 1
      }
    };
  },
  async created() {
    this.time = this.getCurrentDateTimeString()
    var res = await MaintenanceCondition()
      if (res.code == 200) {
        this.maintenance=res.data
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
