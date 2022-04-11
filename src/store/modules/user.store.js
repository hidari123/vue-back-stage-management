import { reqGetCode, reqLogout, reqUserInfo, reqUserLogin, reqUserRegister } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'

// 登陆与注册模块
export default {
  namespaced: true,
  state: {
    code: '',
    token: getToken() || '',
    userInfo: {}
  },
  mutations: {
    GETCODE (state, code) {
      state.code = code
    },
    USERLOGIN (state, token) {
      state.token = token
    },
    GETUSERINFO (state, userInfo) {
      state.userInfo = userInfo
    },
    // 清除仓库和本地token
    CLEARUSERINFO (state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  },
  actions: {
    // 获取验证码
    async getCode ({ commit }, phone) {
      const res = await reqGetCode(phone)
      if (res.code === 200) {
        commit('GETCODE', res.data)
        return 'ok'
      } else {
        return Promise.reject(new Error('failed'))
      }
    },
    // 用户注册
    async UserRegister ({ commit }, user) {
      const res = await reqUserRegister(user)
      if (res.code === 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('该手机号已被注册'))
      }
    },
    // 用户登录
    async UserLogin ({ commit }, data) {
      const res = await reqUserLogin(data)
      if (res.code === 200) {
        commit('USERLOGIN', res.data.token)
        setToken(res.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error('failed'))
      }
    },
    // 获取用户信息
    async getUserInfo ({ commit }) {
      const res = await reqUserInfo()
      if (res.code === 200) {
        commit('GETUSERINFO', res.data)
      }
    },
    // 退出登录
    async userLogout ({ commit }) {
      const res = await reqLogout()
      if (res.code === 200) {
        // action 中不能操作 state
        commit('CLEARUSERINFO')
        return 'ok'
      } else {
        return Promise.reject(new Error('failed'))
      }
    }
  },
  getters: {}
}
