<template>
  <div class="time">
    <p>12:00:01</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.time {
  width: 450px;
  height: 80px;
  margin-left: 0px;
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
  font-kerning: normal;
}
</style>