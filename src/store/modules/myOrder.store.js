import { reqMyOrderList } from '@/api'

export default {
  namespaced: true,
  state: {
    myOrder: {}
  },
  mutations: {
    MYORDER (state, myOrder) {
      state.myOrder = myOrder
    }
  },
  actions: {
    async getMyOrder ({ commit }, { page = 1, limit = 3 }) {
      const res = await reqMyOrderList(page, limit)
      if (res.code === 200) {
        commit('MYORDER', res.data)
      }
    }
  },
  getters: {}
}
