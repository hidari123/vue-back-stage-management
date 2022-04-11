// 对 axios 二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
/* 引入进度条样式 */
import 'nprogress/nprogress.css'
// nprogress.start 进度条开始
// nprogress.done 进度条结束

// 引入store
import store from '@/store'

// 用 axios 对象的 create 创建一个 axios 实例
const requests = axios.create({
  // 配置对象
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config) => {
  // config 配置对象，里面有 headers 请求头属性
  // 进度条开始
  if (store.state.Detail.uuid_token) {
    // 给请求头添加字段(userTempId)，字段名和后台一致
    config.headers.userTempId = store.state.Detail.uuid_token
  }
  // 判断是否需要携带token
  if (store.state.User.token) {
    // 给请求头添加字段 token
    config.headers.token = store.state.User.token
  }
  nprogress.start()
  return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
  // 服务器成功的回调函数
  // 进度条结束
  nprogress.done()
  return res.data
}, (err) => {
  // 响应失败的回调函数
  return Promise.reject(new Error(err))
})

export default requests
