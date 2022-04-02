// search 模板仓库

import { reqGetSearchInfo } from '@/api'

export default {
  namespaced: true,
  state: {
    // 不确定初始状态是什么，先派发一个 action 看一下
    searchList: {}
  },
  mutations: {
    SEARCHLIST (state, searchList) {
      state.searchList = searchList
    }
  },
  // 计算属性
  // 项目中 getters 主要作用 => 简化仓库中的数组
  // 可以简化组件中需要用的数据 => 方便组件获取数据
  getters: {
    // 当前形参 state => search 仓库中的 state
    // 如果服务器数据请求到了，返回的是一个数组
    // 如果网络不好 | 没有网 返回的是 undefined 不能遍历
    // 至少写一个空数组
    goodsList (state) {
      return state.searchList.goodsList || []
    },
    trademarkList (state) {
      return state.searchList.trademarkList || []
    },
    attrsList (state) {
      return state.searchList.attrsList || []
    }
  },
  actions: {
    // 获取 search 模块数据
    async getSearchList ({ commit }, params = {}) {
      // 当前 reqGetSearchInfo 这个函数在调用服务器数据的时候，至少传递一个参数（空对象）
      // params形参：当用户派发 action 时，第二个参数传递过来的，至少是一个空对象
      const res = await reqGetSearchInfo(params)
      if (res.code === 200) {
        commit('SEARCHLIST', res.data)
      }
    }
  }
}
