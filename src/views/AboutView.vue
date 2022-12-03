<template>
  <div>
    <TopNav/>
    <Info/>
    <Footer/>
  </div>
</template>

<script>
import TopNav from "@/components/top_nav/topNav.vue";
import Footer from "@/components/MyFooter/Footer.vue"
import Info from '@/components/goods/goodsInfo.vue'
export default {
components:{
    TopNav, 
    Footer,
    Info
  },
}
</script>

<style lang='less' scoped>

</style>
