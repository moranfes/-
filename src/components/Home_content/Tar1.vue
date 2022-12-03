<template>
  <div class="tar1 container">
    <div class="row">
      <div class="col-xs-4 col-md-4 warper" v-lazy-container="{ selector: 'img' }" v-for="item in img" :key="item.id">
        <a href="#" class="thumbnail">
          <img :data-src="item.url" alt="..." />
            <div class="mask">
                <h2>{{item.title}}</h2>
                <p>{{item.blurb}}</p>
            </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        { id: 1, url: require("./img/pexels-jordan-hyde-1383834.jpg"),title:'多种车型',blurb:'官网认证安全无忧，尊享品质承诺服务，满足多种买车需求'},
        { id: 2, url: require("./img/pexels-mike-b-244206.jpg"),title:'新能源汽车',blurb:'匠心造，智享未来：绿色行，慧赢世界保卫蓝天碧水' },
        { id: 3, url: require("./img/pexels-sarmad-mughal-305070.jpg"),title:'品质保证',blurb:'好服务伴您行，好舒适更舒心'},
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.tar1 {
  width: 1200px;
  margin-top: 10px;
  .warper:hover{
    transform: scale(1.025);
    transition: .1s linear;
  }
  .thumbnail {
    position: relative;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.479);
    color: #fff;
  }
}
</style>
