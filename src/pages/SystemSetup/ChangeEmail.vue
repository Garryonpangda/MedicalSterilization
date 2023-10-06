<template>
  <div class="centered-container">
  <h2>修改邮箱</h2>
    
    <el-form :model="emailForm" label-width="100px">
      <el-form-item label="新邮箱" prop="newEmail" class="custom-label">
        <el-input v-model="emailForm.newEmail" class="ipt"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>   

<script>
export default {
  data() {
    return {
      emailForm: {
        newEmail: "",
      },
    };
  },
  methods: {
    cancel() {
      // 取消修改，清空输入框
      this.emailForm.newEmail = "";
    },
    save() {
      // 在这里添加保存邮箱的逻辑
      if (this.emailForm.newEmail) {
        console.log("新邮箱:", this.emailForm.newEmail);
      } else {
        // 如果新邮箱为空，可以显示错误提示给用户
        this.$message.error("新邮箱不能为空");
      }
    },
  },
};
</script>

<style scoped>
.centered-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh; /* 让容器铺满视口高度的一半 */
  margin-top: 10vh; /* 上边距为视口高度的10% */
  margin-left: 50vh;
}
.ipt {
  width: 400px;
}

h2 {
  color: white;
}
</style>

