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
import { MessageBox } from 'element-ui'
// Import Swiper styles
import 'swiper/css/swiper.css'
// 引入 lazyloac
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/1.gif'
// 引入自定义插件
import myPlugins from '@/plugins/myPlugins'
import '@/plugins/validate'

// 注册组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.config.productionTip = false
// 调用 Vue.use() 实际调用插件中的 install 方法
Vue.use(VueLazyload, {
  // 懒加载默认图
  loading: atm
})
Vue.use(myPlugins, {
  name: 'upper'
})
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
