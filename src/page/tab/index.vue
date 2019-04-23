<template>
  <div>
    <Card title="滚动切换">
      <!--tab 栏-->
      <tabs :scrollable="true" solid-color="#92C03C">
        <tab title="待发货">
          <div style="height: 500px;background-color: red;overflow: auto">
            待发货
            <div style="height: 500px;background-color: #FE007F">
              待收货
            </div>
            <div style="height: 500px;background-color: #FE007F">
              待收货
            </div>
            <div style="height: 500px;background-color: #FE007F">
              待收货
            </div>
          </div>
        </tab>
        <tab title="待收货">
          <div style="height: 500px;background-color: #FE007F">
            待收货
          </div>
        </tab>
        <tab title="已取消">
          <div style="height: 500px;background-color: aquamarine">
            已取消
          </div>
        </tab>
        <tab title="待评价">
          <div style="height: 500px;background-color: #2486ff">
            待评价
          </div>
        </tab>
        <tab title="退货">
          <div style="height: 500px;background-color: greenyellow">
            退货
          </div>
        </tab>
      </tabs>
    </Card>
    <Card title="正常切换">
      <!--tab 栏-->
      <tabs @on-first="first">
        <tab title="待发货" >
          <div style="height: 500px;background-color: red">
            待发货
          </div>
        </tab>
        <tab title="待收货" >
          <div style="height: 500px;background-color: #FE007F">
            待收货
          </div>
        </tab>
        <tab title="已取消">
          <div style="height: 500px;background-color: aquamarine">
            已取消
          </div>
        </tab>
        <tab title="待评价">
          <div style="height: 500px;background-color: #2486ff">
            待评价
          </div>
        </tab>
        <tab title="退货">
          <div style="height: 500px;background-color: greenyellow">
            退货
          </div>
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
    components: {tab, tabs},
    methods: {
      first(e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
