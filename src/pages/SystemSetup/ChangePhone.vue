<template>
  <div class="centered-container2">
    <h2>修改手机号</h2>
    <el-form :model="phoneForm" label-width="100px">
      <el-form-item label="新手机号" prop="newPhone" class="custom-label">
        <el-input v-model="phoneForm.newPhone" class="ipt"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="savePhone">保存</el-button>
        <el-button @click="cancelPhone">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {UpdatePhonenumber} from "@/utils/api/System_Setting/System_SettingApi"
export default {
  data() {
    return {
      phoneForm: {
        newPhone: "",
      },
    };
  },
  methods: {
    cancelPhone() {
      // 取消修改，清空输入框
      this.phoneForm.newPhone = "";
    },
    async savePhone() {
      // 保存手机号
      if (this.phoneForm.newPhone) {
        var data = JSON.stringify({
          'phonenumber': this.phoneForm.newPhone,
        })
        var res = await UpdatePhonenumber(data)
        console.log(res);
        if(res.code==200){
          
          this.$message.success("修改成功");
          cancelPhone()
        }else{
          this.$message.error("修改失败");
        }
        console.log("新手机号:", this.phoneForm.newPhone);
      } else {
        // 如果新手机号为空，可以显示错误提示给用户
        this.$message.error("新手机号不能为空");
      }
    },
  },
};
</script>

<style scoped>
.centered-container2 {
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
