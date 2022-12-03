<template>
  <div class="home">
    <TopNav/>
    <Banner/>
    <Tar1/>
    <Tar2/>
    <Footer/>
  </div>
</template>

<script>
import TopNav from "@/components/top_nav/topNav.vue";
import Footer from "@/components/MyFooter/Footer.vue"
import Banner from '@/components/Home_banner/Banner.vue'
import Tar1 from '@/components/Home_content/Tar1.vue'
import Tar2 from '@/components/Home_content/Tar2.vue'

export default {
  components:{
    TopNav, 
    Footer,
    Banner,
    Tar1,
    Tar2
  },

}
</script>

<style lang="less" scoped>
.home{
  overflow: hidden;
}
</style>