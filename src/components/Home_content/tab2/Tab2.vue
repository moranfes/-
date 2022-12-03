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
          url: "https://auto-pic.china.com/2022/10/09/144928927393.jpg",
          title: "宝马1系改柴油动力1020匹 1.87秒破百",
          js: "说到柴油车，在国内很多人都会跟大货车画等号，因为国内很多卡车和货车都是用柴油发动机的；所以柴油机在国内也跟改装是没什么缘分的。但其实柴油发动机在国外不仅有很多改装案例，同时也有用柴油发动机改装成直线加速赛车，并且是1020匹马力，0-100米加速仅为1.87秒！...",
        },
        {
          id: 2,
          url: "https://auto-pic.china.com//handimg/202209/27/1664264655_88401100.jpg",
          title: "测试比亚迪海豚 6.9秒破百的电动小钢炮",
          js: "作为新能源领导者的比亚迪是较早主攻电动车市场的品牌，经过十多年的发展，比亚迪品牌旗下的新能源汽车涵盖了各个消费层级，爆款车型涵盖了王朝系列的秦、宋、唐、汉，海洋系列的海豹、海豚等车型。而今天试驾的车型是比亚迪e平台3.0首款车型：比亚迪海豚。...",
        },
        {
          id: 3,
          url: "https://auto-pic.china.com/2022/09/19/140658285574.jpg",
          title: "2022款奔驰EQS新车商品性评价",
          js: "虽然奔驰在国内市场推出了多款纯电动车型，但在旗舰产品上似乎还需要一款“看家”车型，于是奔驰EQS孕育而出，与此前车型的不同之处在于，奔驰EQS是基于纯电平台正向研发打造，在保证续航的同时还在造型以及内部奢华品质上展现出应有的水平。据车质网数据显示，截至发稿，奔驰EQS自上市以来还未接到投诉，短期内质量口碑值得肯定...",
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
