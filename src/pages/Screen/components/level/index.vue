<template>
  <div class="right_box">
    <div class="maintenance-title">
      <img src="@/assets/img/setting.png" class="maintenance-icon" />
      <p class="maintenance-text">维保提示</p>
    </div>

    <div class="info-box" v-for="(item, index) in maintenance_tips" :key="index">
      <div class="info-content">
        <p class="info-text">设备{{item.deviceId}}维护计划已更新</p>
        <p class="info-time">{{ item. estimatedMaintenanceDate}}</p>
      </div>
      <router-link :to="'/home/malfunction'" class="info-detail">详情</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maintenance_tips: [
        {
          "id": 1,
          "deviceId": 1,
          "nextLongLife": 500,
          "estimatedMaintenanceDate": "2023-11-16 00:00:00",
          "maintenancePerson": "李师傅",
          "phone": "19877365651",
          "status": 0
        },
        {
          "id": 2,
          "deviceId": 2,
          "nextLongLife": 500,
          "estimatedMaintenanceDate": "2023-11-26 18:04:16",
          "maintenancePerson": "李师傅",
          "phone": "198",
          "status": 0
        },
        {
          "id": 3,
          "deviceId": 3,
          "nextLongLife": 500,
          "estimatedMaintenanceDate": "2023-11-26 18:05:40",
          "maintenancePerson": "李师傅",
          "phone": "1",
          "status": 1
        },
        {
          "id": 4,
          "deviceId": 4,
          "nextLongLife": 500,
          "estimatedMaintenanceDate": "2023-11-26 18:16:41",
          "maintenancePerson": "李师傅",
          "phone": "1",
          "status": 2
        }
      ],
      

      maintenanceInfo: [
        {
          id: 1,
          content: "设备A需要进行定期维护",
          time: "2023-08-15 09:00",
        },
        {
          id: 2,
          content: "设备B维护计划已更新",
          time: "2023-08-14 14:30",
        },
        {
          id: 2,
          content: "设备B维护计划已更新",
          time: "2023-08-14 14:30",
        },
        {
          id: 3,
          content: "设备B维护计划已更新",
          time: "2023-08-14 14:30",
        },
        {
          id: 4,
          content: "设备B维护计划已更新",
          time: "2023-08-14 14:30",
        },
        // ...更多维护信息...
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value: "",
    };
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.home_page {
  height: 150vh;

  .bigtitle {
    width: 100%;
    height: 97px;
    background-color: rgba(1, 84, 120, 1);

    p {
      color: white;
      padding-top: 18px;
      padding-left: 23px;
      font-kerning: normal;
      font-size: 23px;
    }

    .secondtext {
      color: white;

      padding-left: 23px;
      font-size: 14px;
    }
  }

  .bigbox {
    width: 100%;
    height: 550px;
    position: relative;
  }

  .left_box {
    position: absolute;
    width: 73%;
    height: 550px;
    margin-top: 10px;
    background-color: rgba(1, 84, 120);

    .first {
      width: 97%;
      height: 530px;
      margin-top: 10px;
      margin-left: 10px;
      background-color: white;
    }
  }

  .right_box {
    position: absolute;
    width: 25%;
    height: 550px;
    margin-left: 950px;
    margin-top: 10px;
    background-color: rgba(1, 84, 120);
  }

  .echarts-container {
    top: 30px;

  }

  .right_echarts {
    margin-top: -270px;
    margin-left: 400px;

  }

  .selt {
    padding-top: 10px;
  }

  .el-select {
    width: 400px;
  }

  .maintenance-title {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .maintenance-icon {

    width: 30px;
    height: 30px;
    margin-right: 5px;


  }

  .maintenance-text {
    margin-left: 10px;
    font-size: 23px;
    font-weight: bold;
    color: white;
    /* Your styles for .maintenance-text */
  }

  .info-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    /* Your styles for .info-box */
  }



  .info-detail {
    color: rgb(103, 199, 244);
    text-decoration: none;
    cursor: pointer;
    margin-top: 20px;
    font-size: 10px;
  }

  .info-text {
    color: rgb(252, 64, 64);
  }

  .info-time {


    font-size: 10px;
  }
}</style>