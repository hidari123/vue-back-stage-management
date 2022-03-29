export default {
  path: '/search',
  name: 'Search',
  meta: {
    require: false,
    show: true
  },
  component: () => import('@/pages/Search')
}
