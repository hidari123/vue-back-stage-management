export default {
  path: '/login',
  name: 'Login',
  meta: {
    require: false,
    show: false
  },
  component: () => import('@/pages/Login')
}
