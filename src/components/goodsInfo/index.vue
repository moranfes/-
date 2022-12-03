<template>
  <div>
    <TopNav />
    <div class="container">
      <h4 @click="$router.back()" class="back">返回</h4>
      <hr />
      <div
        class="info"
        v-lazy-container="{ selector: 'img' }"
        v-for="item in info"
        :key="item.goods_id"
      >
        <div class="pic">
          <img :data-src="item.goods_pic" alt />
        </div>
        <div class="vehicleInfo">
          <h3>{{item.goods_name}}</h3>
          <br />
          <h3 class="price">￥{{item.goods_price}}</h3>
          <hr />
          <h4>{{item.goods_intro}}</h4>
          <hr />
          <div class="btn">
            <button @click="addCart">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
    <!-- {{this.$router}} -->
  </div>
</template>

<script>
import TopNav from "@/components/top_nav/topNav.vue";
import { getCartAPI } from "@/api";
export default {
  props: ["id", "pic"],
  data() {
    return {
      info: []
    };
  },
  components: {
    TopNav
  },
  methods: {
    async addCart() {
      if (localStorage.getItem("token")) {
        const { data: res } = await getCartAPI(
          localStorage.getItem("token"),
          this.info.pic.goods_id
        );
        console.log(res);
        if (res.status == 0) {
          this.$notify({
            title: "成功",
            message:'已加入购物车',
            type: "success"
          });
        }
      } else {
          this.$confirm('还没有登录, 是否去登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.replace('/login')
        })
      }
    }
  },
  created() {
    console.log(this.$router.history.current.query);
    this.info = this.$router.history.current.query;
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 1200px;
  .back {
    cursor: pointer;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .pic {
      img {
        width: 500px;
      }
    }
    .vehicleInfo {
      position: relative;
      width: 600px;
      height: 375px;
      .price {
        color: red;
      }
      .btn {
        position: absolute;
        bottom: 10px;
        right: 30px;
        button {
          width: 120px;
          height: 35px;
          border: none;
          background-color: #0984e3;
          color: #fff;
        }
      }
    }
  }
}
</style>