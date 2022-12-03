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
          url: "https://auto-pic.china.com//handimg/202207/27/1658884117_15973200.jpg",
          title: "纯电动汽车进入冲刺期 推动出行新能源化",
          js: "2020年11月2日国务院办公厅印发了《新能源汽车产业发展规划（2021-2035）》。这份发展规划十分明确，提出2025年我国新能源汽车新车销售量达到汽车新车销售总量的20%左右。发展规划出台后，极大鼓舞了自主品牌汽车新能源产业的上下游，产业呈现爆发式增长的势头。...",
        },
        {
          id: 2,
          url: "https://auto-pic.china.com/202208/06/1659761444_89948800.jpg",
          title: "第二届中国电动汽车充电设施技术创新大会圆满落幕",
          js: "充电服务如何升级？怎么实现车网互动？实现公共充电场站高效运营的关键在何处？保障充电安全的措施有哪些？新能源汽车进入千万规模后，充电设施建设方面，我们该注意什么……8月4日-8月5日，第二届中国电动汽车充电设施技术创新大会上，30多位充电行业头部的专家、企业研发负责人、工程师等齐聚一堂，带来了一场“纯干货”的技术盛宴。...",
        },
        {
          id: 3,
          url: "https://auto-pic.china.com/202208/28/1661661429_00870600.jpg",
          title: "长安'满电姿态'开启新征程 锐程PLUS亮相成都车展",
          js: "长安汽车携长安深蓝SL03、UNI-K iDD、UNI-V iDD、Lumin等全系电动电气化产品惊艳登场，全面展现电动电气化布局的阶段性成果，以及长安汽车加速转型的决心与信心，以“满电姿态”开启企业进阶的新征程。...",
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
