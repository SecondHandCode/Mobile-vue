<template>
  <div class="wm-card">
    <div :class="headClass" v-if="hasHead">
        <p v-if="title">
            <span>{{title}}</span>
        </p>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  import index from './style/index.css'

  const prefixCls = 'wm-card';
  export default {
    name: "wm-card",
    data() {
      return {
        hasHead: false
      }
    },
    props: {
      title: {
        type: String
      }
    },
    computed: {
      headClass: () => {
        return `${prefixCls}-head`
      }
    },
    mounted() {
      this.hasHead = this.$slots.title || this.title
    }
  }
</script>

<style scoped>

</style>
