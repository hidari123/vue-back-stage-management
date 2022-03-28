export default {
  path: '/home',
  name: 'Home',
  meta: {
    require: false
  },
  component: () => import('@/pages/Home')
}
