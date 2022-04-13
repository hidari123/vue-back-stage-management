export default {
  path: '/trade',
  name: 'Trade',
  meta: {
    show: true
  },
  component: () => import('@/pages/Trade'),
  // 路由独享守卫
  beforeEnter: (to, from, next) => {
    // history 模式 浏览器直接输入地址相当于重新刷新页面发送请求 from 为空
    console.log(to.path, from.path)
    // shopcart => trade
    if (from.path === '/shopcart') {
      next()
    } else {
      // next(false) => 中断当前导航，如果浏览器的url改变 => url重置到from对应的地址
      // 停留在当前
      next(false)
    }
  }
}
