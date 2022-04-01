// mock模拟数据

import morkRequests from './mockRequset'

// 获取 banner 首页轮播图接口
export const reqGetBannerList = () => morkRequests({
  url: '/banner',
  method: 'get'
})

// 获取 floor 数据
export const reqGetFloorList = () => morkRequests({
  url: '/floor',
  method: 'get'
})
