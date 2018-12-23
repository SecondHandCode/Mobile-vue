<template>
  <div>
    <p class=" wm-heard">吃瓜组件</p>
    <div class="wm-list-main" v-for="(item,index) in indexList" :key="index">
      <div class="wm-title-son">{{item.title}}</div>
      <ul class="wm-list-ul">
        <router-link :to="item.path+'/'+child.path" :key="index2" tag="li" v-for="(child,index2) in item.children">
          {{child.title}}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import {indexList} from "../router/router";
  export default {
    name: "Main",
    data() {
      return {
        indexList: indexList
      }
    }
  }
</script>

<style scoped>

</style>
