<template>
  <div class="echartsMapAllDemo">
    <!-- style的宽高一定要写，不写也不会展示echarts图 -->
    <div
      id="myEcharts"
      ref="myEcharts"
      style="width: 900px; height: 100vh; "
    ></div>
    <div class="secondBox">
      <div class="Tip-title">
        <img src="@/assets/img/setting.png" class="Tip-icon" />
        <p class="Tip-text">维护提示</p>
      </div>
      <div class="smallbox">
          <div
          class="info-box"
          v-for="(item, index) in maintenanceInfo"
          :key="index"
        >
          <div class="info-content">
            <p class="info-text">{{ item.content }}</p>
            <p class="info-time">{{ item.time }}</p>
          </div>
          <router-link :to="'/home/malfunction'" class="info-detail"
            >详情</router-link
          >
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import chinaJson from "../../../../../node_modules/echarts/map/json/china.json";
export default {
  data() {
    return {
      // ...其他数据
      selectedRange: "", // 选择的数据统计范围
      echartsInstance: null, // echarts实例
    
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
          id: 3,
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
  mounted() {
    this.chinaEcharts();
  },
  methods: {
    chinaEcharts() {
      //1.注册一个地图
      this.$echarts.registerMap("china", chinaJson);

      //2.初始化echarts
      let myChart = this.$echarts.init(this.$refs.myEcharts);

      // 3.准备数据
      var data = [
        { name: "北京", value: 177 },
        { name: "天津", value: 42 },
        { name: "河北", value: 102 },
        { name: "山西", value: 81 },
        { name: "内蒙古", value: 47 },
        { name: "辽宁", value: 67 },
        { name: "吉林", value: 82 },
        { name: "黑龙江", value: 66 },
        { name: "上海", value: 24 },
        { name: "江苏", value: 92 },
        { name: "浙江", value: 114 },
        { name: "安徽", value: 109 },
        { name: "福建", value: 116 },
        { name: "江西", value: 91 },
        { name: "山东", value: 119 },
        { name: "河南", value: 137 },
        { name: "湖北", value: 116 },
        { name: "湖南", value: 114 },
        { name: "重庆", value: 91 },
        { name: "四川", value: 125 },
        { name: "贵州", value: 62 },
        { name: "云南", value: 83 },
        { name: "西藏", value: 9 },
        { name: "陕西", value: 80 },
        { name: "甘肃", value: 56 },
        { name: "青海", value: 10 },
        { name: "宁夏", value: 18 },
        { name: "新疆", value: 67 },
        { name: "广东", value: 123 },
        { name: "广西", value: 59 },
        { name: "海南", value: 14 },
      ];
      var geoCoordMap = {
        上海: [121.472644, 31.231706],
        云南: [102.712251, 25.040609],
        内蒙古: [111.670801, 40.818311],
        北京: [116.405285, 39.904989],
        台湾: [121.509062, 25.044332],
        吉林: [125.3245, 43.886841],
        四川: [104.065735, 30.659462],
        天津: [117.190182, 39.125596],
        宁夏: [106.278179, 38.46637],
        安徽: [117.283042, 31.86119],
        山东: [117.000923, 36.675807],
        山西: [112.549248, 37.857014],
        广东: [113.280637, 23.125178],
        广西: [108.320004, 22.82402],
        新疆: [87.617733, 43.792818],
        江苏: [118.767413, 32.041544],
        江西: [115.892151, 28.676493],
        河北: [114.502461, 38.045474],
        河南: [113.665412, 34.757975],
        浙江: [120.153576, 30.287459],
        海南: [110.33119, 20.031971],
        湖北: [114.298572, 30.584355],
        湖南: [112.982279, 28.19409],
        澳门: [113.54909, 22.198951],
        甘肃: [103.823557, 36.058039],
        福建: [119.306239, 26.075302],
        西藏: [91.132212, 29.660361],
        贵州: [106.713478, 26.578343],
        辽宁: [123.429096, 41.796767],
        重庆: [106.504962, 29.533155],
        陕西: [108.948024, 34.263161],
        青海: [101.778916, 36.623178],
        香港: [114.173355, 22.320048],
        黑龙江: [126.642464, 45.756967],
      };
      //4.把数据变成[{{ name: "北京", value: [121.472644, 31.231706,177] },...}]格式
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        console.log(res);
        return res;
      };
      //5.echarts配置
      let option = {
        backgroundColor: "transparent",
        title: {
          text: "全国设备分布",
          left: "35%",
          textStyle: {
            color: "#fff",
            fontSize: 30,
            align: "left",
          },
        },

        tooltip: {
          trigger: "item",
          formatter: "{b}<br/>{c} ",
        },

        visualMap: {
          min: 0,
          max: 100,
          text: ["多", "少"],
          calculable: true,
          seriesIndex: [0],
          inRange: {
            color: ["#00467F", "#A5CC82"],
          },
        },

        geo: {
          left: "10%", // 调整地图相对于容器的左边距
          map: "china",
          geoIndex: 0,
          aspectScale: 0.75,
          showLegendSymbol: false,
          label: {
            normal: {
              show: true,
            },
            emphasis: {
              show: false,
              textStyle: {
                color: "#fff",
              },
            },
          },
          roam: true,
          animation: false,
          data: data,
        },

        series: [
          {
            type: "map",
            map: "china",
            geoIndex: 0,
            aspectScale: 0.75,
            showLegendSymbol: false,
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            roam: true,
            animation: false,
            data: data,
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>
<style lang="less">
.home_page {
  height: 150vh;
.secondBox {
  position: absolute;
  width: 800px;
  height: 185px;
  background-color: #047dad;
}
.Tip-icon {
 position: fixed;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  margin-top: 10px;
}
.Tip-text {
position: absolute;
  margin-top:10px;
  margin-left: 30px;
  font-size: 26px;
  font-weight: bold;
  color: white;
}

.smallbox{
  margin-top: 50px;
}
.info-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
}



.info-detail {
  color: rgb(103, 199, 244);
  text-decoration: none;
  cursor: pointer;
  margin-top: 10px;
  font-size: 10px;
}
.info-text{
  color: rgb(252, 64, 64);
}
.info-time{

  
  font-size: 10px;
}
}
</style>


