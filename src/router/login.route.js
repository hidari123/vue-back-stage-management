export default {
  path: '/login',
  name: 'Login',
  meta: {
    require: false
  },
  component: () => import('@/pages/Login')
}
