import { reqPayInfo, reqPayStatus, reqSubmitOrder } from '@/api'

export default {
  namespaced: true,
  state: {
    orderId: '',
    payInfo: {},
    payStatus: {}
  },
  mutations: {
    ORDERID (state, orderId) {
      state.orderId = orderId
    },
    PAYINFO (state, payInfo) {
      state.payInfo = payInfo
    },
    PAYSTATUS (state, payStatus) {
      state.payStatus = payStatus
    }
  },
  actions: {
    async submitOrder ({ commit }, { tradeNo, data }) {
      const res = await reqSubmitOrder(tradeNo, data)
      if (res.code === 200) {
        commit('ORDERID', res.data)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async getPayInfo ({ commit }, orderId) {
      const res = await reqPayInfo(orderId)
      if (res.code === 200) {
        console.log(res)
        commit('PAYINFO', res.data)
      }
    },
    async getPayStatus ({ commit }, orderId) {
      const res = await reqPayStatus(orderId)
      commit('PAYSTATUS', res)
    }
  },
  getters: {}
}
