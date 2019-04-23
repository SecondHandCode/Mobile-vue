<template>
  <div v-show="show" :style="tabContent">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tab",
    data() {
      return {
        show: true,
        firstLoading: false
      }
    },
    props: {
      title: {
        type: String,
        default: () => {
          return "默认值"
        }
      }
    },
    watch: {
      show(r) {
        if (this.$parent.scrollable) {
          this.show = true;
        }
      },
      firstLoading(r) {
        if (r) {
          this.$parent.firstLoadingFn(this);
        }
      }
    },
    computed: {
      tabContent() {
        return {
          "width": `${this.$parent.tabsWidth}px`,
          'display': 'table-cell'
        }
      }
    },
    methods:{
    },
    mounted() {
      this.$parent.updateStatus();
    }
  }
</script>

<style scoped>

</style>
