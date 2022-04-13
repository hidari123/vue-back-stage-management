export default {
  path: '/pay',
  name: 'Pay',
  meta: {
    show: true
  },
  component: () => import('@/pages/Pay'),
  beforeEnter: (to, from, next) => {
    if (from.path === '/trade') {
      next()
    } else {
      next(false)
    }
  }
}
