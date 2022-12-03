<template>
  <div class="tar1 container">
    <div class="page-header">
      <h2>服务介绍</h2>
    </div>
    <div>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#home" aria-controls="home" role="tab" data-toggle="tab"
            >导购</a
          >
        </li>
        <li role="presentation">
          <a
            href="#profile"
            aria-controls="profile"
            role="tab"
            data-toggle="tab"
            >测评</a
          >
        </li>
        <li role="presentation">
          <a
            href="#messages"
            aria-controls="messages"
            role="tab"
            data-toggle="tab"
            >新能源</a
          >
        </li>
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="home">
          <Tab1 />
        </div>
        <div role="tabpanel" class="tab-pane" id="profile">
          <Tab2 />
        </div>
        <div role="tabpanel" class="tab-pane" id="messages">
          <Tab3 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tab1 from "@/components/Home_content/tab1/Tab1.vue";
import Tab2 from "@/components/Home_content/tab2/Tab2.vue";
import Tab3 from "@/components/Home_content/tab3/Tab3.vue";
export default {
  data() {
    return {
      assess: [],
      resources: [],
    };
  },
  components: {
    Tab1,
    Tab2,
    Tab3,
  },
};
</script>

<style lang="less" scoped>
.tar1 {
  width: 1200px;
  margin-bottom: 10px;
  .page-header {
    text-align: center;
    border: none;
  }
  .nav-tabs {
    li {
      a {
        padding: 16px 50px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
      }
    }
  }
  .tab-content {
    padding: 10px;
    border: 1px solid #ddd;
    border-top: none;
  }
}
</style>
