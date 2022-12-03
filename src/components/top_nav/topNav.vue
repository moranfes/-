<template>
  <div class="nav-container">
    <div class="container">
      <nav>
        <div class="container-fluid">
          <div class="navbar-header">
            <!-- logo -->
            <span class="navbar-brand">MR汽车</span>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <!-- 左边的按钮 -->
            <ul class="nav navbar-nav">
              <li>
                <router-link to="/home">首页</router-link>
              </li>
              <li>
                <router-link to="/about">商店</router-link>
              </li>
              <li>
                <router-link to="/cart">购物车</router-link>
              </li>
            </ul>
            <!-- 右边的按钮 -->
            <ul class="nav navbar-nav navbar-right">
              <li class="login">
                <router-link to="/login" v-if="token">登陆/注册</router-link>
                <p v-else @click="userinfo">个人中心</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: true,
      user: ""
    };
  },
  methods: {
    userinfo() {
      // if (localStorage.getItem("token") != undefined) {
      this.$router.push("/userinfo");
      // } else {
      //   this.$alert("请先登陆", "提示", {
      //     confirmButtonText: "确定"
      //   });
      // }
    }
  },
  created() {
    if (localStorage.getItem("token") != undefined) {
      this.token = false;
    }
  }
};
</script>

<style lang="less" scoped>
.nav-container {
  background-color: #f1f1f1;
  border-bottom: 1px solid #ddd;
  color: #333;
  margin-bottom: 10px;
  height: 80px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  .container {
    width: 1200px;
  }
  .nav li {
    width: 120px;
    height: 80px;
    a {
      padding: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 80px;
      // font-size: 16px;
      // font-weight: bold;
      color: #333;
    }
  }
  .navbar-header {
    span {
      padding: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 80px;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .login {
    text-align: center;
    width: 300px;
    height: 50px;
    line-height: 80px;
    p {
      cursor: pointer;
    }
  }
}
</style>
