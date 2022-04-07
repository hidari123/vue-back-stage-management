import { reqCartList } from '@/api'

export default {
  namespaced: true,
  state: {
    cartList: []
  },
  mutations: {
    CARTLIST (state, cartList) {
      state.cartList = cartList
    }
  },
  actions: {
    // 获取购物车列表数据
    async getCartList ({ commit }) {
      const res = await reqCartList()
      if (res.code === 200) {
        commit('CARTLIST', res.data)
      }
    }
  },
  getters: {
    // 获取个人购物车数据
    cartList (state) {
      return state.cartList[0] ? (state.cartList[0].cartInfoList || []) : {}
    }
  }
}
