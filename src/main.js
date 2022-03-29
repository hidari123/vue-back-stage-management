import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 三级联动组件 --- 全局组件
import TypeNav from '@/pages/Home/TypeNav'

Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  // 当这里写 router 时，组件身上都有 $router, $route 属性
  router,
  store,
  render: h => h(App)
}).$mount('#app')
