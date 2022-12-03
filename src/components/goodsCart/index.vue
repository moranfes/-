<template>
  <div class="box">
    <TopNav />
    <div class="container">
      <h2>购物车</h2>
      <hr />
      <div class="header">
        <div class="check">选项</div>
        <div class="pic">商品信息</div>
        <div class="price">单价</div>
        <div class="count">数量</div>
        <div class="total">金额</div>
        <div class="remove">操作</div>
      </div>
      <div class="cart-info" v-for="(item,index) in this.$store.state.list" :key="index">
        <div class="check">
          <input type="checkbox" v-model="item.checked" @click="checkItem(index)" />
        </div>
        <div class="pic">
          <img :src="item.goods_imgUrl" alt />
          <span>{{item.goods_name}}</span>
        </div>
        <div class="price">￥{{item.goods_price}}</div>
        <div class="count">
          <button @click="item.goods_num>1? item.goods_num--:item.goods_num">-</button>
          {{item.goods_num}}
          <button @click="item.goods_num++">+</button>
        </div>
        <div class="total">￥{{item.goods_price*item.goods_num}}</div>
        <div class="remove" @click="removeCart(item.id)">删除</div>
      </div>
    </div>
    <div class="footer">
      <div class="all">
        <input type="checkbox" id="c1" @click="checkAllFn" :checked="isCheckedAll" />
        <label for="c1">全选</label>
      </div>
      <div class="handle">
        <span>合计：<samp>￥{{total.price}}</samp> </span>
        <button>结算(共{{total.num}}件)</button>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/top_nav/topNav.vue";
import { getGoodsCartAPI, removeGoodsCartAPI } from "@/api";
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  inject: ["reload"],
  data() {
    return {};
  },
  components: {
    TopNav
  },
  methods: {
    ...mapMutations(["cart",'checkItem']),
    ...mapActions(["checkAllFn"]),
    // 获取购物车商品
    async getCart() {
      const { data: res } = await getGoodsCartAPI(
        localStorage.getItem("token")
      );
      console.log(res);
      res.data.forEach(v => {
        v["checked"] = true;
      });
      // console.log(res.data);
      this.cart(res.data);
      // console.log(this.$store.state.list);
    },
    // ...mapMutations([this.info]),
    // 删除购物车商品
    async removeCart(id) {
      const { data: res } = await removeGoodsCartAPI(id);
      console.log(res);
      if (res.status == 0) {
        this.reload();
        this.$notify({
          title: "成功",
          message: "已删除",
          type: "success"
        });
      }
      console.log(id);
    }
  },
  computed: {
    ...mapGetters(["isCheckedAll",'total'])
  },
  created() {
    if(localStorage.getItem('token')){
      this.getCart();
    }
  }
};
</script>

<style lang='less' scoped>
.box {
  .container {
    width: 1200px;
    background-color: #f1f1f1;
    min-height: 850px;
    padding-bottom: 100px;
    .header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
    .cart-info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      //   width: 1200px;
      height: 150px;
      .pic {
        text-align: left;
        img {
          margin: 0 20px;
        }
      }
      .price,
      .total {
        color: red;
      }
      .count {
        button {
          border: none;
          background-color: #ddd;
        }
      }
      .remove {
        cursor: pointer;
      }
    }
    .check {
      width: 5%;
      text-align: center;
      vertical-align: middle;
    }
    .pic {
      text-align: center;
      width: 55%;
      img {
        width: 120px;
      }
    }
    .price,
    .count,
    .total,
    .remove {
      text-align: center;
      width: 10%;
    }
  }
  .footer {
    width: 1200px;
    height: 60px;
    background-color: #f1f1f1;
    border-top: 1px solid rgb(190, 190, 190);
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 38px;
    font-size: 18px;
    .all {
      input{
        margin-right:10px ;
      }
    }
    .handle{
      samp{
        color: red;
      }
      button{
        margin-left: 10px;
        border: none;
        width: 150px;
        height: 50px;
        background-color: #0985e3bd;
        color:#fff;
        border-radius: 50px;
        text-align: center;
        line-height: 50px;
      }
      button:hover{
        background-color: #0984e3;
      }
    }
  }
}
</style>