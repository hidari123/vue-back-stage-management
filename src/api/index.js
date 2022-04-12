// api 统一管理
import requests from './request'

// 三级联动接口
export const reqCategoryList = () => requests({
  url: '/product/getBaseCategoryList',
  method: 'GET'
})

// 获取搜索商品接口
export const reqGetSearchInfo = (params) => requests({
  url: '/list',
  method: 'POST',
  // 在使用axios时，配置选项中包含params和data
  // params是添加到url的请求字符串中的 => 用于get请求
  // 而data是添加到请求体（body）中的 => 用于post请求
  data: params
})

// 获取产品详情接口
export const reqGoodsInfo = (skuid) => requests({
  url: `/item/${skuid}`,
  method: 'GET'
})

// 将产品添加到购物车中（获取更新某个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
  url: `/cart/addToCart/${skuId}/${skuNum}`,
  method: 'POST'
})

// 获取购物车列表
export const reqCartList = () => requests({
  url: '/cart/cartList',
  method: 'GET'
})

// 删除购物车产品
export const reqDeleteCartById = (skuId) => requests({
  url: `/cart/deleteCart/${skuId}`,
  method: 'DELETE'
})

// 切换商品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => requests({
  url: `/cart/checkCart/${skuId}/${isChecked}`,
  method: 'GET'
})

// 获取验证码
export const reqGetCode = (phone) => requests({
  url: `/user/passport/sendCode/${phone}`,
  method: 'GET'
})

// 注册
export const reqUserRegister = (data) => requests({
  url: '/user/passport/register',
  data,
  method: 'POST'
})

// 登录
export const reqUserLogin = (data) => requests({
  url: '/user/passport/login',
  data,
  method: 'POST'
})

// 获取用户信息(带token)
export const reqUserInfo = () => requests({
  url: '/user/passport/auth/getUserInfo',
  method: 'GET'
})

// 退出登录
export const reqLogout = () => requests({
  url: '/user/passport/logout',
  method: 'GET'
})

// 获取用户地址信息
export const reqAddressInfo = () => requests({
  url: '/user/userAddress/auth/findUserAddressList',
  method: 'GET'
})

// 获取商品清单
export const reqOrderInfo = () => requests({
  url: '/order/auth/trade',
  method: 'GET'
})

// 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({
  url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
  method: 'POST',
  data
})

// 获取订单信息
export const reqPayInfo = (orderId) => requests({
  url: `/payment/weixin/createNative/${orderId}`,
  method: 'GET'
})

// 获取支付订单状态
export const reqPayStatus = (orderId) => requests({
  url: `/payment/weixin/queryPayStatus/${orderId}`,
  method: 'GET'
})
