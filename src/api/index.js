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
