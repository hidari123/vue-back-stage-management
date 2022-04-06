import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 三级联动组件 --- 全局组件
import TypeNav from '@/components/TypeNav'
// 引入mockServe.js => mock 数据
import '@/mock/mockServe'
// 注册轮播图组件
import Carousel from '@/components/Carousel'
// 注册分页器
import Pagination from '@/components/Pagination'

// Import Swiper styles
import 'swiper/css/swiper.css'

// 注册组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)

Vue.config.productionTip = false

new Vue({
  // 当这里写 router 时，组件身上都有 $router, $route 属性
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    // 配置全局事件总线 $bus
    Vue.prototype.$bus = this
  }
}).$mount('#app')
