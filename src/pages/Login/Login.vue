<template>
  <div class="login-container">
    <div class="background-wave"></div>
    <div class="headtitle"></div>

    <div class="form-container">
      <h2>深紫外消杀管理平台</h2>
      <el-form v-if="!isRegister" ref="formRef" :rules="rules" :model="form">
        <el-form-item prop="name" class="form-group">
          <el-input type="txet" v-model="form.name" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="form-group">
          <el-input type="password" show-password id="password" v-model="form.password" placeholder="密码"
            prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="verification">
          <el-input type="text" id="code" v-model="form.code" placeholder="验证码" prefix-icon="el-icon-s-grid"></el-input>
          <span class="verification-code" @click="refreshVerificationCode">
            <img :src="img" alt="" class="img">
          </span>
        </el-form-item>
        <el-form-item prop="remember" class="form-group remember-password">
          <el-checkbox v-model="form.remember">直接登录</el-checkbox>
        </el-form-item>
        <el-button type="primary" @click="login()">登录</el-button>
        <p class="switch-link" @click="isRegister = true">没有账号？点击注册</p>
      </el-form>
      <el-form ref="formRef" :rules="rules" :model="registerForm" v-else>
        <el-form-item prop="name" class="form-group">
          <el-input type="name" id="register-email" v-model="registerForm.name" placeholder="请输入用户名"
            prefix-icon="el-icon-user" required></el-input>
        </el-form-item>
        <el-form-item prop="password" class="form-group">
          <el-input type="password" id="register-password" show-password v-model="registerForm.password" placeholder="密码"
            prefix-icon="el-icon-lock" @click="togglePasswordVisibility"></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword" class="form-group">
          <el-input type="password" id="confirm-password" show-password v-model="registerForm.confirmPassword"
            placeholder="确认密码" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item prop="verificationCode" class="form-group verification-group">
          <el-input type="text" v-model="registerForm.verificationCode" placeholder="验证码" prefix-icon="el-icon-s-grid"
            class="code"></el-input>
          <el-button type="default" class="send-verification" @click="sendVerificationCode"
            :disabled="verificationCodeSent || countdown > 0">
            <template v-if="countdown > 0"> {{ countdown }}s </template>
            <template v-else>
              {{ verificationCodeSent ? "已发送" : "发送验证码" }}
            </template>
          </el-button>
        </el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
        <p class="switch-link" @click="isRegister = false">
          已有账号？点击登录
        </p>
      </el-form>
    </div>
  </div>
</template>
<script>

import { getVerifyCode } from '@/utils/api/VerifyCode';

import { doLogin } from '@/utils/api/User'
import { useUserStore } from "@/stores/user"
export default {
  data() {
    return {
      img: "",
      isRegister: false,
      form: {
        name: "",
        password: "",
        remember: false,
        code: "",
      },
      registerForm: {
        name: "",
        password: "",
        confirmPassword: "",
        verificationCode: "",
      },
      verificationCode: this.generateVerificationCode(), // 初始验证码
      verificationCodeSent: false,
      countdown: 0,
      timer: null,
      passwordVisible: false,
      rules: {
        name: [
          { message: "请输入用户名", trigger: "blur", required: true },
          { trigger: "blur" },
        ],
        password: [
          { message: "请输入密码", trigger: "blur", required: true },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 个字符",
            trigger: "blur",
          },
        ],
        confirmPassword: [
          { message: "请确认密码", trigger: "blur", required: true },
        ],
        verificationCode: [
          { message: "请输入验证码", trigger: "blur", required: true },
        ],
      },
    };
  },

  methods: {
    generateVerificationCode() {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let code = "";
      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
      }
      return code;
    },
    async refreshVerificationCode() {
      const res = await getVerifyCode()
      this.img = res.data
    },

    getCookie(name) {
      const cookies = document.cookie.split(";"); // 将所有cookie拆分成数组
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // 去除cookie前后的空格
        if (cookie.startsWith(name + "=")) {
          return cookie.substring(name.length + 1); // 返回cookie值
        }
      }
      return null; // 如果未找到指定的cookie，则返回null
    },

    async login() {
      const userStore = useUserStore()



      const res = await doLogin(this.form.name, this.form.password, this.form.code, this.form.remember)
      console.log(res)
      if (res.code == 20010) {
        const res = await getVerifyCode(2)
        this.img = res.data
        this.$message.error("验证码错误");

      } else if (res.code == 20050) {
        this.$message.error("账号或密码错误");
      } else if (res.code == 20011) {
        this.$message.success("登录成功");
        userStore.updateUserInfo(res.data)
        this.$router.push("/home/control");
      }


      // 处理登录成功的其他逻辑

      //   var username = localStorage.getItem("TOKEN");
      //   console.log("ffff", username);
      //   var username2 = Cookies.get("HMACCOUNT_BFESS");
      //   console.log("-------", username2);
      //   this.$router.push("/home/firstpage");
      // } else {

      //   return;
      // }
    },
    sendVerificationCode() { },
    startCountdown() {
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 1000);
    },
    register() {
      // 处理注册逻辑
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
  async created() {
    const res = await getVerifyCode()
    this.img = res.data
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(../../src/assets/img/login9.png) no-repeat;
  background-size: cover;
}

.left {
  position: absolute;
  width: 50px;
  height: 50px;
  border-style: solid;
  border-width: 4px 0 0 4px;
  border-color: rgb(237, 234, 234);
  margin-left: -670px;
  margin-top: -100px;
}

.right {
  position: absolute;
  width: 50px;
  height: 50px;
  border-style: solid;
  border-width: 0 4px 4px 0;
  border-color: rgb(237, 234, 234);
  margin-left: 10px;
  margin-top: -27px;
}

.headtitle h1 {
  color: rgb(54, 50, 56);
  font-family: Georgia, serif;
  font-size: 43px;
  margin-left: -640px;
  margin-top: -60px;
}

.form-container {
  opacity: 0.93;
  position: absolute;
  width: 400px;
  padding: 40px;
  left: 560px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  color: #39598a;
  font-size: 24px;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.remember-password {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #39598a;
}

.remember-password input[type="checkbox"] {
  margin-right: 5px;
}

.verification-group {
  display: flex;
  align-items: center;
  color: #39598a;
}

.code {
  width: 250px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #39598a;
}

.el-input__inner {
  padding-left: 36px;
}

.el-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #c0c4cc;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #39598a;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #2d4373;
}

.send-verification {
  margin-left: 10px;
  padding: 8px 12px;
  background-color: #39598a;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-verification:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.switch-link {
  color: #39598a;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: underline;
}

.img {
  max-width: 100%;
  height: 100%;
}

.verification-code {
  display: inline-block;
  position: fixed;
  width: 80px;
  height: 39px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  margin-left: -80px;
  margin-top: 1px;
  background-color: beige;
}
</style>