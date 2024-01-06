<template>
  <div class="box6">
    <div class="title">
      <img src="@/assets/img/setting.png" />
      <p>系统情况</p>
    </div>
    <div class="data-group">
      <div class="data-box">
        <p class="data-title1">App用户</p>
        <p class="data-value1">{{system_condition.appusers_count}}位</p>
      </div>
      <div class="data-box">
        <p class="data-title2">管理台用户</p>
        <p class="data-value2">{{system_condition.adminusers_count}}位</p>
      </div>
    </div>
    <div class="data-group">
      <div class="data-box">
        <p class="data-title3">组织总数</p>
        <p class="data-value3">{{system_condition.organization_count}}个</p>
      </div>
      <div class="data-box">
        <p class="data-title4">覆盖城市</p>
        <p class="data-value4">{{system_condition.citys_count}}个</p>
      </div>
    </div>
    <el-divider></el-divider>
    <p class="update-time">更新时间：{{ time }}</p>
  </div>
</template>

<script>

import { SystemCondition } from "@/utils/api/System_Api/System_Api"
export default {
  data() {
    return {
      time: null,
      system_condition: {
        "organization_count": 3,
        "appusers_count": 4396,
        "citys_count": 4,
        "adminusers_count": 13
      }
    };
  },
  async created() {
    this.time = this.getCurrentDateTimeString()
    var res = await SystemCondition()
    if (res.code == 200) {
      this.system_condition = res.data
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
