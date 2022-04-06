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

// 先把 VueRouter 原型对象的 push / replace 保存一份
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

// 重写 push 和 replace 方法
// 第一个参数： 告诉原来的 push 方法 => 往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call 传递参数 用逗号隔开
    // 调用 thia.$router.push 保证上下文是 this.$router 的实例
    // 不绑定 this 是 window
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => {}, () => {})
  }
}

// 配置路由
const router = new VueRouter({
  // history 模式
  // hash模式的原理是依赖hashchange（地址的变化带动内容的变化）有#号，丑，不优雅
  mode: 'history',
  routes,
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    // 滚动条在最顶部
    return { y: 0 }
  }
})

export default router
