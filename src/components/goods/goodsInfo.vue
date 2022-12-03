<template>
  <div class="container">
    <search @newQuery = 'getNewQuery'/>
    <div class="row">
      <div class="col-sm-3 col-md-3" v-lazy-container="{ selector: 'img' }" v-for="item in ComputedList" :key="item.goods_id">
        <div class="thumbnail" @click.prevent="info(item.goods_id,item)">
          <img :data-src="item.goods_pic" />
          <div class="caption">
            <h3>{{item.goods_name}}</h3>
          </div>
          <div class="price">
            <h3>￥{{item.goods_price}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="loading" v-loading="loading"></div>
    <div class="loading" v-show="errmsg">加载失败</div>
  </div>
</template>

<script>
import search from '@/components/goods/search.vue'
import { getGoodsAPI } from "@/api";
export default {
  props:[],
  data() {
    return {
      query:'',
      goodsInfo: [],
      loading:false,
      errmsg:''
    };
  },
  methods: {
    async goods() {
      this.loading = true;
      await getGoodsAPI().then(
        response=>{
          this.loading = false;
          this.goodsInfo = response.data.data;
          console.log(response.data.data);
        },
        error=>{
          this.loading = false;
          this.errmsg = error.message
        }
      );
    },
    getNewQuery(val){
      console.log(val);
      this.query = val
    },
    info(id,pic){
      this.$router.push({
        path:`/about/goodsInfo/${id}`,
        query:{
          pic
        }
      })
    }
  },
  computed: {
    ComputedList() {
      var vm = this.query;
      var nameList = this.goodsInfo;
      return nameList.filter(function(item) {
        return item.goods_name.toLowerCase().indexOf(vm.toLowerCase()) !== -1;
      });
    }
  },
  created() {
    this.goods();
  },
  components:{
    search
  }
};
</script>

<style lang='less' scoped>
.container {
  position: relative;
  width: 1200px;
  
  .row{
    min-height: 800px;
  }
  .thumbnail {
    position: relative;
    width: 280px;
    height: 380px;
    cursor: pointer;
    .price{
      position: absolute;
      bottom: 0;
      color: red;
    }
  }
  .thumbnail:hover {
    transform: scale(1.025);
    transition: all 0.2s;
  }
  .loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
  }
}
</style>