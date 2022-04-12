export default {
  path: '/register',
  name: 'Register',
  meta: {
    require: false,
    show: false
  },
  component: () => import('@/pages/Register')
}
