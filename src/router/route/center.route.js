export default {
  path: '/center',
  name: 'Center',
  redirect: '/center/myorder',
  meta: {
    show: true
  },
  component: () => import('@/pages/Center'),
  children: [
    {
      path: 'myorder', // 子组件路径开头不加斜杠
      component: () => import('@/pages/Center/myOrder')
    }, {
      path: 'grouporder', // 子组件路径开头不加斜杠
      component: () => import('@/pages/Center/groupOrder')
    }
  ]
}
