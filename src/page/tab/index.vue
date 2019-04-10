<template>
  <div>
    <Card>
      <!--tab 栏-->
      <tabs :scrollable="true" solid-color="#92C03C">
        <tab title="标题1">
          内容一
        </tab>
        <tab title="标题2">
          内容二
        </tab>
        <tab title="标题3">
          内容三
        </tab>
        <tab title="标题四">
          内容四
        </tab>
        <tab title="标题五">
          内容五
        </tab>
        <tab title="标题六">
          内容六
        </tab>
      </tabs>
    </Card>
    <Card>
      <!--tab 栏-->
      <tabs>
        <tab title="标题1">
          内容一
        </tab>
        <tab title="标题2">
          内容二
        </tab>
        <tab title="标题3">
          内容三
        </tab>
        <tab title="标题四">
          内容四
        </tab>
        <tab title="标题五">
          内容五
        </tab>
        <tab title="标题六">
          内容六
        </tab>
      </tabs>
    </Card>
  </div>
</template>

<script>
  import tab from './components/tab'
  import tabs from './components/tabs'

  export default {
    name: "index",
    components: {tab, tabs}
  }
</script>

<style scoped>

</style>
