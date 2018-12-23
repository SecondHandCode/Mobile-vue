import Vue from 'vue'
import Router from 'vue-router'
import {routers} from "./router";

Vue.use(Router)
const routerConfig = {
  routes: routers
}
export const router = new Router(routerConfig)
// 路由跳转之前
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.path === '/') {
  next("hello")
  } else {
    next();
  }
})
// 路由完成之后
router.afterEach((to) => {
  // 每次都回到 顶部
  window.scrollTo(0, 0)
})
