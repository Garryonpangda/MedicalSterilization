<template>
  <div class="centered-container3">
    <h2>修改密码</h2>
    <el-form :model="passwordForm" label-width="100px">
      <el-form-item label="原始密码" prop="oldPassword" class="custom-label">
        <el-input
          type="password"
          v-model="passwordForm.oldPassword"
          class="ipt"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword" class="custom-label">
        <el-input
          type="password"
          v-model="passwordForm.newPassword"
          class="ipt"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="confirmPassword"
        class="custom-label"
      >
        <el-input
          type="password"
          v-model="passwordForm.confirmPassword"
          class="ipt"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="savePassword">保存</el-button>
        <el-button @click="cancelPassword">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordForm: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    cancelPassword() {
      // 取消修改，清空输入框
      this.passwordForm.oldPassword = "";
      this.passwordForm.newPassword = "";
      this.passwordForm.confirmPassword = "";
    },
    savePassword() {
      // 在这里添加保存密码的逻辑
      if (this.passwordForm.newPassword === this.passwordForm.confirmPassword) {
        console.log("原始密码:", this.passwordForm.oldPassword);
        console.log("新密码:", this.passwordForm.newPassword);
      } else {
        // 如果新密码和确认密码不匹配，可以显示错误提示给用户
        this.$message.error("新密码和确认密码不匹配");
      }
    },
  },
};
</script>

<style scoped>
.centered-container3 {
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
