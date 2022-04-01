import { reqCategoryList } from '@/api'
import { reqGetBannerList, reqGetFloorList } from '@/api/mockIndex'

export default {
  namespaced: true, // namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  // 储存数据
  state: {
    // 三级联动菜单数据
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    // floor 数据
    floorList: []
  },
  // 相当于计算属性, 用于简化仓库数据, 让组件获取仓库的数据更加方便
  getters: {},
  // 修改 state 的唯一手段
  mutations: {
    CATEGORYLIST (state, categoryList) {
      state.categoryList = categoryList
    },
    BANNERLIST (state, bannerList) {
      state.bannerList = bannerList
    },
    FLOORLIST (state, floorList) {
      state.floorList = floorList
    }
  },
  // 可以书写业务逻辑, 但是不能修改 state
  actions: {
    // 提交 mutation
    // 通过 api 里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList ({ commit }) {
      const res = await reqCategoryList()
      if (res.code === 200) {
        commit('CATEGORYLIST', res.data)
      }
    },

    // 获取首页轮播图的数据
    async getBannerList ({ commit }) {
      const res = await reqGetBannerList()
      if (res.code === 200) {
        commit('BANNERLIST', res.data)
      }
    },

    // 获取 floor 数据
    async getFloorList ({ commit }) {
      const res = await reqGetFloorList()
      commit('FLOORLIST', res.data)
    }
  }
}
