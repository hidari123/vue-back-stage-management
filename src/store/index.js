import Vue from 'vue'
import Vuex from 'vuex'
import Home from './modules/home.store'
import Search from './modules/search.store'

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
    Search
  }
})
