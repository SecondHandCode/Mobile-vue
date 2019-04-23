<template>
  <div>
    <Card title="基础按钮">
      <div class="wm-padding-normal">
        <wmSwitch v-model="checked"></wmSwitch>
      </div>
    </Card>
    <Card title="禁用样式">
      <div class="wm-padding-normal">
        <wmSwitch v-model="checked" disabled></wmSwitch>
      </div>
    </Card>
    <Card title="自定义大小">
      <div class="wm-padding-normal">
        <wmSwitch v-model="checked" font-size="24"></wmSwitch>
      </div>
    </Card>
    <Card title="自定义颜色（activeColor:选中，inactiveColor:未选中）">
      <div class="wm-padding-normal">
        <wmSwitch v-model="checked" active-color="red" inactive-color="#dddeee"></wmSwitch>
      </div>
    </Card>
    <Card title="异步控制">
      <div class="wm-padding-normal">
        <wmSwitch :value="checked" @input="onInput"></wmSwitch>
      </div>
    </Card>
  </div>

</template>

<script>
  import wmSwitch from './components/wmSwitch'

  export default {
    name: "index",
    components: {wmSwitch},
    data() {
      return {
        checked: false
      }
    },
    methods: {
      onInput(checked) {
        let c = window.confirm('确定？');
        if (c) {
          this.checked = checked;
        }
      }
    }
  }
</script>

<style scoped>

</style>
