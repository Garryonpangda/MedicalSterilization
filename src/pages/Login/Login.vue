<template>
    <div class="login_page flex">
        <router-view></router-view>
    </div>
</template>

<script>
</script>

<style scoped lang='scss'>
.login_page {
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url('@/assets/img/bg.png');

    #title {
        letter-spacing: 10px;
        font-size: 50px;
        text-align: center;
    }
}
</style>