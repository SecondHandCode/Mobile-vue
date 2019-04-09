<template>
  <div class="go-back">
    <!--返回上一层-->
    <div class="go-left">
      <i class="left-arrow" aria-hidden="true" @click="goBack"></i>
    </div>
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
    position: relative;
    background: #ffffff;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
  }

  .go-left {
    position: absolute;
    left: 20px;
    top: 4px;
  }

  .left-arrow {
    position: relative;
    display: inline-block;
    border-left: 18px solid black;
    border-top: 18px solid black;
    width: 0;
    height: 0;
    transform: rotate(-45deg);
  }

  .left-arrow::after {
    content: "";
    position: absolute;
    top: -16px;
    z-index: 1;
    left: -16px;
    border-left: 20px solid #ffffff;
    border-top: 20px solid #ffffff;
  }


</style>
