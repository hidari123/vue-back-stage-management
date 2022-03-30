import { reqCategoryList } from '@/api'

export default {
  namespaced: true, // namespaced: true 的方式使其成为带命名空间的模块。保证在变量名一样的时候，添加一个父级名拼接。
  // 储存数据
  state: {
    categoryList: []
  },
  // 相当于计算属性, 用于简化仓库数据, 让组件获取仓库的数据更加方便
  getters: {},
  // 修改 state 的唯一手段
  mutations: {
    CATEGORYLIST (state, categoryList) {
      state.categoryList = categoryList
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
    }
  }
}
