<template>
    <div class="card-header">
        <el-row>
            <el-col :offset="6" :span="12">
                <h1 class="fontcolor" style="letter-spacing: 5px;">图书管理系统</h1>
            </el-col>
            <el-col :offset="3" :span="3">
                <h3 class="title">{{ title }}</h3>
            </el-col>
        </el-row>
        <el-divider></el-divider>
    </div>
</template>

<script>

export default {
    props: {
        title: String
    }
}

</script>

<style scoped lang='scss'>
.card-header {
    margin-bottom: 10px;

    .title {
        margin-top: 10px;
    }
}
</style>