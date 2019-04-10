<template>
  <div v-show="show">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tab",
    data() {
      return {
        show: false
      }
    },
    props: {
      title: {
        type: String,
        default: () => {
          return "默认值"
        }
      }
    }
  }
</script>

<style scoped>

</style>
