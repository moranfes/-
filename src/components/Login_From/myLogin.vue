<template>
  <div class="login">
    <div class="form">
      <div class="outer">
        <input type="text" v-model="loginForm.username" name='username' required />
        <div class="input_bom"></div>
        <label>用户名</label>
      </div>
      <div class="outer">
        <input type="password" v-model="loginForm.password" name='password' autocomplete required />
        <div class="input_bom"></div>
        <label>密码</label>
      </div>
      <div class="item">
        <button @click="myLoginAPI">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginAPI } from "@/api";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async myLoginAPI() {
      console.log(this.loginForm);
      const { data: res } = await LoginAPI(this.loginForm);
      if(res.status != 0){
        console.log(res);
        this.$message.error('账号或密码错误')
        localStorage.removeItem('token')
      }else{
        this.$router.replace('/home')
        localStorage.setItem('token',res.token)
        this.$notify({
          message: '登录成功',
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
.login {
  .form {
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    .outer {
      position: relative;
      width: 100%;
      height: 50px;
      input:focus ~ label,
      input:valid ~ label {
        transform: translateY(-35px);
        font-size: 15px;
        color: #2c6fdb;
      }
      input {
        width: 100%;
        height: 100%;
        padding: 0;
        outline: none;
        border: none;
        border-bottom: 2px solid #ddd;
      }

      label {
        position: absolute;
        bottom: 10px;
        left: 0;
        pointer-events: none;
        font-size: 14px;
        transition: all 0.3s ease;
      }
      .input_bom {
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #2c6fdb;
        transform: scaleX(0);
        transition: all 0.3s ease;
      }
      input:focus ~ .input_bom,
      input:valid ~ .input_bom {
        transform: scaleX(1);
      }
    }
    .item {
      button {
        width: 600px;
        height: 50px;
        background-color: #0984e3;
        outline: none;
        border: none;
        color: #fff;
        font-size: 16px;
      }
    }
  }
}
</style>
