// 模拟数据
// 引入 mockjs 模块
import Mock from 'mockjs'
// 引入 JSON 格式数据(JSON 数据没有对外暴露，但是可以引入)
// webpack 默认对外暴露 image JSON css
import banner from './banner.json'
import floor from './floor.json'

// mock 数据：第一个参数请求地址，第二个参数请求数据
Mock.mock('/mock/banner', { code: 200, data: banner }) // 模拟首页轮播图数据
Mock.mock('/mock/floor', { code: 200, data: floor })
