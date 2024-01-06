<template class="back">
  <div class="container ">
    <!-- 数据大屏展示内容区域 -->
    <div class="screen" ref="screen">
      <!-- 数据大屏顶部 -->
     
      <div class="bottom">
        <div class="left">
          <Title class="title"></Title>
          <Setimg></Setimg>
          <Number class="tourist"></Number>
          <Duration class="sex"></Duration>
          <Planar class="age"></Planar>
        </div>
        <div class="center">
          <Map class="map"></Map>
          <!-- <LineChart class="line"></LineChart> -->
        </div>
        <div class="right">
          <Time></Time>
          <Setimg2></Setimg2>
          <Origin class="rank"></Origin>
          <Level class="year"></Level>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "./components/title/index.vue";
import Setimg from "./components/setimg/index.vue";
import Setimg2 from "./components/setimg/right.vue";
import Time from "./components/time/index.vue";
import Number from "./components/number/index.vue";
import Duration from "./components/duration/index.vue";
import Planar from "./components/planardata/index.vue";
import Map from "./components/map/index.vue";
import Origin from "./components/origin/index.vue";
import Level from "./components/level/index.vue";

export default {
  mounted() {
    this.$nextTick(() => {
      this.setScreenTransform();
      window.addEventListener("resize", this.setScreenTransform);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.setScreenTransform);
  },
  methods: {
    setScreenTransform() {
      const screen = this.$refs.screen;
      if (screen) {
        screen.style.transform = `scale(${this.getScale()}) translate(-50%,-50%)`;
      } 
    },
    getScale(w = 1920, h = 1080) {
      const ww = window.innerWidth / w;
      const wh = window.innerHeight / h;
      return ww < wh ? ww : wh;
    },
  },
  components: {
    Title,
    Setimg,
    Number,
    Duration,
    Planar,
    Map,
    Time,
    Setimg2,
    Origin,
    Level,
  },
};
</script>
<style scoped lang="scss">
.back{
  background-color: #027db4;
}
.home_page {
  height: 250vh;
  background-color: #027db4 !important;
.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(./images/bg.png) no-repeat;
  background-size: cover;
}

.screen {
  position: absolute;
  width: 24rem;
  height: 7.5rem;
  left: 3.75rem;
  margin-top: 0.625rem;
}

.screen .top {
  width: 100%;
  height: 40px;
}

.screen .bottom {
  display: flex;
}

.screen .bottom .right {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: -2.0rem;
  margin-left: 2.5rem;
}

.screen .bottom .right .rank {
  width: 450px;
  height: 250px;
  margin-top: 20px;
  margin-left: 0px;
}

.screen .bottom .right .year {
  width: 450px;
  height: 510px;
  margin-top: 500px;
  margin-left: 0px;
}

.screen .bottom .right .count {
  flex: 1;
}

.screen .bottom .left {
  flex: 1;
  height: 1040px;
  display: flex;
  margin-top: -2.0rem;
  margin-left: 4.5rem;
  flex-direction: column;
}

.screen .bottom .left .tourist {
  width: 450px;
  height: 250px;
  margin-top: 20px;
  margin-left: 20px;
}

.screen .bottom .left .sex {
  width: 450px;
  height: 250px;
}

.screen .bottom .left .age {
  width: 450px;
  height: 250px;
}



.screen .bottom .center .map {
  width: 800px;
  height: 800px;
  background-color: rgba(1, 84, 120, 0.7490196078);
  margin-top: .9125rem;
  margin-left: 2.0rem;

}

.screen .bottom .center .line {
  flex: 1;
}
}
</style>