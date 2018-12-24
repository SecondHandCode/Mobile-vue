<template>
  <Card title="基础按钮">
    <div class="wm-padding-normal">
      <wm-button type="default" disabled back-ground-color="red">
        默认按钮
      </wm-button>
      <wm-button type="belle">
        belle
      </wm-button>
      <wm-button type="primary">
        主要按钮
      </wm-button>
    </div>
    <div class="wm-padding-normal">
      <wm-button type="warning">
        警告按钮
      </wm-button>
      <wm-button type="danger">
        危险按钮
      </wm-button>
    </div>
  </Card>
</template>

<script>
  import wmButton from './wm-button'
  // 按钮组件查看界面
  export default {
    name: "index",
    components: {wmButton}
  }
</script>

<style scoped>

</style>
