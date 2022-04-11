import Vue from 'vue'
import Vuex from 'vuex'
import Home from './modules/home.store'
import Search from './modules/search.store'
import Detail from './modules/detail.store'
import ShopCart from './modules/shopCart.store'
import User from './modules/user.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Home,
    Search,
    Detail,
    ShopCart,
    User
  }
})
