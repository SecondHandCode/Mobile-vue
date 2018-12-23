import Main from '../App'

export const otherAppRouters = [
  {
    path: "/",
    name: "index",
    meta: {
      title: "首页"
    },
    component: Main,
    children: [
      {
        path: "/hello",
        name: "hello",
        meta: {
          title: "首页"
        },
        component: () => import("@/components/HelloWorld.vue")
      }
    ]
  }
]
export const routers = [...otherAppRouters]
