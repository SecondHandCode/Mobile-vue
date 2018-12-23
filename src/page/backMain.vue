<template>
  <div v-cloak>
    <go-back :title="title"></go-back>
    <router-view></router-view>
  </div>
</template>

<script>
  import goBack from './goback/back'
  // 上行有返回按钮 的视图
  export default {
    name: "backMain",
    components: {goBack},
    data() {
      return {
        title: "测试一下"
      }
    },
    mounted() {
      this.title = this.$route.meta.title;
    }
  }
</script>

<style scoped>
  .wm-back {
    pointer-events: none;
    font-size: 1.8rem;
    line-height: 100%;
    padding: 10px 15px;
  }

  .wm-back:before {
    content: "<";
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    line-height: 100%;
  }
</style>
