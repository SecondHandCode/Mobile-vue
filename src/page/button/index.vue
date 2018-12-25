<template>
  <div>
    <Card title="基础按钮">
      <div class="wm-padding-normal">
        <wm-button type="default" back-ground-color="red">
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
      <!--去圆角-->
    </Card>
    <Card title="禁止按钮">
      <div class="wm-padding-normal">
        <wm-button disabled type="warning">
          警告按钮
        </wm-button>
        <wm-button disabled type="danger">
          危险按钮
        </wm-button>
      </div>
    </Card>
    <Card title="幽灵按钮">
      <div class="wm-padding-normal">
        <wm-button plain type="primary">
          主要按钮
        </wm-button>
        <wm-button plain type="danger">
          危险按钮
        </wm-button>
      </div>
    </Card>
    <Card title="加载按钮">
      <div class="wm-padding-normal">
        <wm-button loading type="danger">
          危险按钮
        </wm-button>
        <wm-button loading type="primary">
          危险按钮
        </wm-button>
      </div>
    </Card>
  </div>

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
