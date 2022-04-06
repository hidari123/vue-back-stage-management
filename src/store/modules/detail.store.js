import { reqGoodsInfo } from '@/api'
export default {
  namespaced: true,
  state: {
    goodsInfo: {}
  },
  // 修改 state
  mutations: {
    GOODSINFO (state, goodsInfo) {
      state.goodsInfo = goodsInfo
    }
  },
  actions: {
    // 获取产品信息
    async getGoodsInfo ({ commit }, skuid) {
      const res = await reqGoodsInfo(skuid)
      if (res.code === 200) {
        commit('GOODSINFO', res.data)
      }
    }
  },
  // 简化数据
  getters: {
    // 简化路径导航数据
    categoryView (state) {
      // state.goodsInfo.categoryView 初始为空对象，空对象没有里面的数据，返回的是 undefined
      return state.goodsInfo.categoryView || {}
    },
    // 简化产品信息数据
    skuInfo (state) {
      return state.goodsInfo.skuInfo || {}
    },
    // 简化产品售卖属性
    spuSaleAttrList (state) {
      return state.goodsInfo.spuSaleAttrList || []
    }
  }
}
