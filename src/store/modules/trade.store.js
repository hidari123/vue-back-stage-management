import { reqAddressInfo, reqOrderInfo } from '@/api'

export default {
  namespaced: true,
  state: {
    address: [],
    orderInfo: []
  },
  mutations: {
    GETUSERADDRESS (state, address) {
      state.address = address
    },
    GETORDERINFO (state, orderInfo) {
      state.orderInfo = orderInfo
    }
  },
  actions: {
    // 获取用户地址信息
    async getUserAddress ({ commit }) {
      const res = await reqAddressInfo()
      if (res.code === 200) {
        commit('GETUSERADDRESS', res.data)
      }
    },
    // 获取商品清单数据
    async getOrderInfo ({ commit }) {
      const res = await reqOrderInfo()
      if (res.code === 200) {
        console.log(res)
        commit('GETORDERINFO', res.data)
      }
    }
  },
  getters: {}
}
