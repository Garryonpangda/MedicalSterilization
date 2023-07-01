<template>
    <Vcode :show="isShow" @success="success" />
</template>

<script>
import Vcode from "vue-puzzle-vcode";
export default {
    components: {
        Vcode
    },
    data() {
        return {
            isShow: true // 验证码模态框是否出现
        }
    },
    methods: {
        submit() {
            this.isShow = true;
        },
        // 用户通过了验证
        success() {
            this.isShow = false; // 通过验证后，需要手动隐藏模态框
            this.$message.success({
                message: "登录成功！",
                center: true
            })
            this.$router.replace('/home')
        },
    }
}
</script>

<style scoped lang='scss'></style>