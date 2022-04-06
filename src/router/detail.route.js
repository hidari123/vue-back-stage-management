export default {
  path: '/detail/:skuid',
  name: 'Detail',
  meta: {
    show: true
  },
  component: () => import('@/pages/Detail')
}
