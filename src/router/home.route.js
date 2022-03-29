export default {
  path: '/home',
  name: 'Home',
  meta: {
    require: false,
    show: true
  },
  component: () => import('@/pages/Home')
}
