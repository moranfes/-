<template>
  <div class="footer">
    <div class="container">
      <dl>
        <dt class="title">友情链接</dt>
        <dd>
          <a
            v-for="item in chain"
            :href="item.url"
            target="_block"
            :key="item.id"
            >{{ item.name }}</a
          >
        </dd>
      </dl>
      <dl>
        <dt class="title">特别鸣谢</dt>
        <dd>
          <a
            v-for="item in thank"
            :href="item.url"
            target="_block"
            :key="item.id"
            >{{ item.name }}</a
          >
        </dd>
      </dl>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chain: [
        { id: 1, url: "http://auto.sina.com.cn/", name: "新浪汽车" },
        { id: 2, url: "http://auto.sohu.com/", name: "搜狐汽车" },
        { id: 3, url: "http://auto.163.com/", name: "网易汽车" },
        { id: 4, url: "http://www.cheshi.com/", name: "网上车市" },
        { id: 5, url: "http://www.xcar.com.cn/", name: "爱卡汽车" },
        { id: 6, url: "http://auto.people.com.cn/", name: "人民网汽车" },
        { id: 8, url: "http://auto.china.com/", name: "中华网汽车" },
        { id: 9, url: "http://www.pcauto.com.cn/", name: "太平洋汽车" },
        { id: 10, url: "http://www.feelcars.com/", name: "汽车探索网" },
        { id: 11, url: "http://www.360che.com/", name: "卡车之家" },
        { id: 12, url: "http://www.ittime.com.cn/", name: "IT时代周刊" },
        { id: 13, url: "http://auto.ifeng.com/", name: "凤凰汽车" },
        { id: 14, url: "https://mf.autohome.com.cn/671/", name: "天津车展" },
        { id: 15, url: "https://mf.autohome.com.cn/158/", name: "广州车展" },
        { id: 16, url: "https://mf.autohome.com.cn/544", name: "成都车展" },
        { id: 17, url: "http://www.it168.com/", name: "IT168" },
        { id: 18, url: "http://www.pcpop.com/", name: "泡泡网" },
        {
          id: 19,
          url: "//www.che168.com/#pvareaid=100449",
          name: "二手车之家",
        },
        { id: 20, url: "http://www.qichezhuanye.com/", name: "汽车专业网" },
        {
          id: 21,
          url: "http://www.chinaautonews.com.cn/",
          name: "中国汽车新闻网",
        },
        { id: 22, url: "https://www.pingan.com/?autohome", name: "平安官网" },
      ],
      thank: [
        { id: 1, url: "http://www.baidu.com", name: "百度搜索" },
        { id: 2, url: "https://www.autohome.com.cn/", name: "汽车之家" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 300px;
  background-color: #f1f1f1;
  .container {
    width: 1200px;
    height: 100%;
    padding: 100px 10px 0;
    dl {
      font-size: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: wrap;
      dt {
        width: 10%;
        text-align: center;
      }
      dd {
        width: 90%;
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: wrap;
        a {
          width: 120px;
          text-align: center;
          text-decoration: none;
          color: #000;
        }
        a:hover {
          color: orangered;
        }
      }
    }
  }
}
</style>
