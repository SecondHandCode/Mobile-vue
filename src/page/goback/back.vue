<template>
  <div class="go-back">
    <i class="fa fa-angle-left fa-3x" aria-hidden="true" @click="goBack"></i>
    <div class="t-text">
      {{title}}
    </div>
  </div>
</template>

<script>
  // 返回栏
  export default {
    name: "back",
    props: {
      title: {
        type: String,
        default: "返回栏"
      }
    },
    methods: {
      goBack() {
        // document.referrer
        // 获取上一个跳转过来的路径
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .go-back {
    padding: 6px 15px;
    position: relative;
    background: #ffffff;
    font-weight: 500;
  }

  .go-back .t-text {
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    font-size: 1.6rem;
    height: 1.6rem;
    line-height: 1.6rem;
    z-index: 0;
  }

  .fa-angle-left {
    z-index: 99;
    position: relative;
    width: 20px;
  }

  .fa-angle-left:active {
    background: #f0eff5;
  }
</style>
