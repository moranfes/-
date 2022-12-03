<template>
  <div>
    <div v-for="item in buy" :key="item.id" v-lazy-container="{ selector: 'img' }">
      <div class="row">
        <div class="col-md-4">
          <img :data-src="item.url" alt="" />
        </div>
        <div class="col-md-8">
          <a href="javascript:;" class="title">{{ item.title }}</a>
          <p>{{ item.js }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buy: [
        {
          id: 1,
          url: "https://auto-pic.china.com/202006/12/5ee2f72c3c21b.jpg",
          title: "七座中大型SUV 别克昂科旗给你不一样的驾乘体验",
          js: "别克昂科旗的推出在中大型SUV里面引起了很大的关注，毕竟是一款全新的30万级别的七座SUV。...",
        },
        {
          id: 2,
          url: "https://auto-pic.china.com/202006/08/5edd9e5918f85.jpg",
          title: "荣威RX5 PLUS/凌派混动版等 本周新车抢先预览",
          js: "新的一周已经开始，在本周内会有哪些新车即将跟大家见面呢？事实上，本周将要上市的新车似乎并不太多，但却不乏亮点。今天，为大家选取了三款关注较高的车型，话不多说，让我们一起先睹为快!...",
        },
        {
          id: 3,
          url: "https://auto-pic.china.com/202005/28/5ecf86307ab6f.jpg",
          title: "15万选越野还是颜值？吉利博越对比标致2008",
          js: "​在最近上市的新车堆里有那么两款SUV引起了不少消费者的关注，它们分别是全新一代标致2008和2020款吉利博越PRO四驱，这两款车不管从外型还是内置来说都还不错。最主要的是，两款车官方售价都在15万以内，对于大多数人来...",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.row {
  margin: 10px 0;
  img{
    width: 350px;
    height: 234px;
  }
  .title{
    font-size: 28px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    margin-bottom: 20px;
    display: inline-block;
  }
  .title:hover{
    color: orangered;
  }
  p{
    font-size: 16px;
  }
}
</style>
