<template>
  <div class="box6">
    <div class="title">
      <p>地震质心</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// import { getData } from "../../../../utils/api/statis";
export default {
  data() {
    return {
      centroidTime: [], //质心时间
      centroidDepth: [], //质心深度
      year: [],
    };
  },
  created() {
    // this.getdata();
  },
  mounted() {

  },
  methods: {
  
  },
};
</script>


<style scoped lang="scss">
.box6 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0px;
  background: linear-gradient(rgba(48, 48, 49, 0.3), rgba(16, 173, 246, 0.2));
  -webkit-box-shadow: inset 0 0 10px rgb(0, 213, 255);
  .title {
    margin-left: 5px;
    /* 设置背景颜色为半透明 */

    p {
      color: white;
      font-size: 20px;
    }
  }

  .charts {
    height: calc(100% - 30px);
  }
}
</style>

