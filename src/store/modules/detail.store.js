import { reqAddOrUpdateShopCart, reqGoodsInfo } from '@/api'
// 封装游客身份模块 uuid => 生成一个随机字符串 => 不能再改了
import { getUUID } from '@/utils/uuidToken'
export default {
  namespaced: true,
  state: {
    goodsInfo: {},
    // 游客临时身份
    uuid_token: getUUID()
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
    },
    // 将产品添加到购物车中
    // 因为只接受一个参数，解构赋值
    async addOrUpdateShopCart ({ commit }, { skuId, skuNum }) {
      // 服务器写入数据成功，并没有返回其他数据，只是返回 code === 200，表示成功
      // 服务器没有返回其余数据，不需要三连环存储数据
      const res = await reqAddOrUpdateShopCart(skuId, skuNum)
      if (res.code === 200) {
        // 服务器加入购物车成功
        return res
      } else {
        // 加入购物车失败
        return Promise.reject(new Error('failed'))
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
