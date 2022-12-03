<template>
  <div class="container top">
    <div class="top_info">
      <div class="top_pic" v-lazy-container="{ selector: 'img' }">
        <img :data-src="user_pic" alt />
      </div>
      <div class="top_mess">
        <div> <span>账号</span>{{username}}</div>
        <div><span>昵称</span>{{nickname}}</div>
        <div> <span>邮箱</span>{{email}}</div>
      </div>
      <div class="btn">
        <button @click="exit">退出登录</button>
      </div>
    </div>
    <Midefy/>
  </div>
</template>

<script>
import {userInfoAPI} from '@/api'
import Midefy from "@/components/userinfo/midefy/myMidefy.vue";

export default {
  data() {
    return {
      username: "",
      nickname: "",
      email: "",
      user_pic: ""
    };
  },
  methods: {
    async demo() {
      const { data: res } = await userInfoAPI(localStorage.getItem("token"));
      console.log(res.data);
      this.username = res.data.username;
      this.nickname = res.data.nickname;
      this.email = res.data.email;
      this.user_pic = res.data.user_pic;
    },
    exit(){
        localStorage.removeItem('token')
        this.$router.replace('/home')
    }
  },
  created() {
    this.demo()
  },
  components:{
    Midefy
  }
};
</script>

<style lang='less' scoped>
.top {
  width: 1200px;

  .top_info {
    width: 100%;
    background-color: #f1f1f1;
    height: 300px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    .top_pic {
    margin: 0 20px;
      width: 200px;
      height: 200px;
      background-color: aqua;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .top_mess{
        font-size: 20px;
        margin-right: 480px;
        span{
            letter-spacing: 40px;
        }
    }
    .btn{
        button{
            width: 100px;
            height: 40px;
            border: none;
            color: #fff;
            background-color: rgba(221, 49, 49, 0.692);
        }
        button:hover{
            background-color: rgb(221, 49, 49);
        }
    }
  }
}
</style>