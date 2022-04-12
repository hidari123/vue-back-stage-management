export default {
  path: '/search/:keyword?',
  name: 'Search',
  meta: {
    require: false,
    show: true
  },
  props: true, // params 参数
  component: () => import('@/pages/Search')
}
