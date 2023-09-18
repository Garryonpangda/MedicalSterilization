<template>
  <div class="echartsMapAllDemo">
    <div class="mapchart" ref="map"></div>
    <div class="news"></div>
  </div>
</template>

<script>
import "echarts/extension/bmap/bmap";

export default {
  name: "BmapScatter",
  data() {
    return {
   
    };
  },
  created() {
    // this.initData();
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.mapchart {
  width: 900px;
  height: 600px;
  background-color: brown;
}
</style>
