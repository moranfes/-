<template>
  <div class="container nav-content">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active">
        <a href="#home" aria-controls="home" role="tab" data-toggle="tab">修改信息</a>
      </li>
      <li role="presentation">
        <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">修改头像</a>
      </li>
      <li role="presentation">
        <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">修改密码</a>
      </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="home">
        <Minfo/>
      </div>
      <div role="tabpanel" class="tab-pane" id="profile">
        <Mpic/>
      </div>
      <div role="tabpanel" class="tab-pane" id="messages">
        <Mpwd/>
      </div>
    </div>
  </div>
</template>

<script>
import Minfo from '@/components/userinfo/midefy/M-info.vue'
import Mpwd from '@/components/userinfo/midefy/M-pwd.vue'
import Mpic from '@/components/userinfo/midefy/M-pic.vue'
export default {
    components:{
        Minfo,
        Mpwd,
        Mpic 
    }
};
</script>

<style lang='less' scoped>
.nav-content {
  width: 1200px;
  padding: 0;
  margin: 0;
  .nav-tabs {
    li {
      a {
        padding: 16px 50px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
      }
    }
  }
  .tab-content {
    padding: 10px;
    border: 1px solid #ddd;
    border-top: none;
  }
}
</style>