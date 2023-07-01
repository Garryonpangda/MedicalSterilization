<template>
    <TransparentCard>
        <div class="login-box">
            <CardHeader title="登录"></CardHeader>
            <el-form label-position="left" label-width="60px">
                <el-form-item label="用户名">
                    <el-input clearable></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="large" @click="login">登录</el-button>
                    <el-button type="info" size="large">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </TransparentCard>
</template>

<script>
import CardHeader from './components/CardHeader.vue';
export default {
    components: {
        CardHeader
    },
    methods: {
        login() {
            this.$router.push("/auth")
        }
    }
}
</script>

<style scoped lang='scss'></style>