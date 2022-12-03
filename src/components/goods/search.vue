<template>
  <div class="container">
    <div class="box">
      <input type="text" placeholder="请输入要查找的内容" v-model="query" />
      <button @click="sousuo">搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    sousuo() {
      this.$emit("newQuery", this.query);
    }
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 1200px;
  text-align: center;
  .box{
    width: 700px;
    height: 50px;
    margin: 20px auto;
    background-color: aqua;
    input{
      outline: none;
      width: 85%;
      padding-left: 10px;
    }
    button{
      width: 15%;
    }
    input,button{
      border: none;
      height: 100%;
      border: 1px solid #f1f1f1;
    }
  }
}
</style>