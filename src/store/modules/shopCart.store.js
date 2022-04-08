import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'

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
    },

    // 删除购物车某一个商品
    async deleteCartListById ({ commit }, skuId) {
      const res = await reqDeleteCartById(skuId)
      if (res.code === 200) {
        return res
      } else {
        return Promise.reject(new Error('failed'))
      }
    },

    // 切换商品选中状态
    async updateCheckedById ({ commit }, { skuId, isChecked }) {
      const res = await reqUpdateCheckedById(skuId, isChecked)
      if (res.code === 200) {
        return res
      } else {
        return Promise.reject(new Error('failed'))
      }
    },

    // 删除所有选中的商品
    deleteAllCheckedCart ({ dispatch, getters }) {
      // context: 小仓库
      // 获取购物车中全部产品
      const promiseAll = []
      getters.cartList.forEach(item => {
        const promise = item.isChecked === 1 && dispatch('deleteCartListById', item.skuId)
        promiseAll.push(promise)
      })
      // 只要全部 promise 成功返回的是成功的promise数组
      // 有一个失败返回失败false
      //   Promise.all(promiseAll).then((values) => {
      //     console.log(values) // 数组
      //   })
      return Promise.all(promiseAll)
    },
    // 修改所有产品的选中状态
    updateAllCartChecked ({ dispatch, getters }, isChecked) {
      const promiseAll = []
      getters.cartList.forEach(item => {
        const promise = item.isChecked !== isChecked && dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
        promiseAll.push(promise)
      })
      return Promise.all(promiseAll)
    }
  },
  getters: {
    // 获取个人购物车数据
    cartList (state) {
      return state.cartList[0] ? (state.cartList[0].cartInfoList || []) : {}
    }
  }
}
