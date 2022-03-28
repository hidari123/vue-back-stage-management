import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routeList = []
// 引入路由
const importAll = (r) => {
  r.keys().forEach(
    // 把 export default 对象追加到 routerList 中
    (key) => routeList.push(r(key).default)
  )
}

// 动态引入
// require.context() => webpack API => 引入文件，动态的
// 1. 路径
// 2. 是否匹配子级文件
// 3. 规则
// 在和 index 同级的文件夹下 不找子级，找 .router.js结尾的文件
importAll(require.context('./', false, /\.route\.js/))

const routes = [
  ...routeList,
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  // history 模式
  // hash模式的原理是依赖hashchange（地址的变化带动内容的变化）有#号，丑，不优雅
  mode: 'history',
  routes
})

export default router
