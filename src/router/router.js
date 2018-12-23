import Main from '../page/Main.vue'
import Back from '../page/backMain'

export const notingRouters = {
  path: "*",
  name: "notingRouters",
  component: Main
}
// 基础内容
export const basicsViewRouters = [
  {
    path: "/basics",
    name: "basics",
    title: "基础内容",
    meta: {
      title: "基础内容"
    },
    component: Back,
    children: [
      {
        path: "index-wm-button",
        name: "index-wm-button",
        title: "button组件",
        meta: {
          title: "button组件"
        },
        component: () => import("@/page/button/index.vue")
      }
    ]
  }
]
export const otherAppRouters = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "首页"
    },
    component: Main
  }
]
// router 跳转所有路径
export const routers = [...otherAppRouters, notingRouters, ...basicsViewRouters]
// 首页 数据 按钮展示
export const indexList = [...basicsViewRouters]

