<template>
  <div class="login">
    <div class="login_pic">
      <div class="login_text">欢迎</div>
    </div>
    <div class="login_form">
      <div class="change">

        <span @click="show = true">登录</span>
        <span @click="show = false">注册</span>
      </div>
      <transition name="fade" mode="out-in">
        <login v-if='show'></login>
        <logon v-else></logon>
      </transition>
    </div>
  </div>
</template>

<script>
import login from "@/components/Login_From/myLogin.vue";
import logon from "@/components/Login_From/mylogon.vue";
export default {
  data() {
    return {
      show: true,
    };
  },
  components: {
    login,
    logon,
  },
};
</script>

<style lang="less" scoped>
/* 过渡 */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.login {
  display: flex;
  .login_pic {
    width: 1146px;
    height: 968px;
    background: url(../assets/login.jpg) no-repeat;
    background-size: cover;
    .login_text {
      margin-top: 150px;
      margin-left: 100px;
      font-size: 45px;
      font-weight: 700;
      color: #fff;
    }
  }
  .login_form {
    width: 774px;
    height: 968px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .change {
      width: 600px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        width: 45%;
        display: block;
        font-size: 16px;
        margin: 10px 0;
        cursor: pointer;
        border-bottom: 4px solid #0984e3;
      }
    }
  }
}
</style>
