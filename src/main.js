import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // 当这里写 router 时，组件身上都有 $router, $route 属性
  router,
  store,
  render: h => h(App)
}).$mount('#app')
