import Main from '../page/Main.vue'
import BackMain from '../page/backMain'

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
    title: "基础",
    meta: {
      title: "基础"
    },
    component: BackMain,
    children: [
      {
        path: "index-wm-button",
        name: "index-wm-button",
        title: "button组件",
        meta: {
          title: "button组件"
        },
        component: () => import("@/page/button/index.vue")
      },
      {
        path: "index-wm-switch",
        name: "index-wm-switch",
        title: "switch组件",
        meta: {
          title: "switch组件"
        },
        component: () => import("@/page/switch/index.vue")
      },
    ]
  },
  {
    path: "/tab",
    name: "tab",
    title: "高级",
    meta: {
      title: "高级"
    },
    component: BackMain,
    children: [
      {
        path: "index-wm-tab",
        name: "index-wm-tab",
        title: "tabNav",
        meta: {
          title: "tabNav"
        },
        component: () => import("@/page/tab/index.vue")
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

