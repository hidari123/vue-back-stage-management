import { v4 as uuidv4 } from 'uuid'
// 生成一个随机字符串，每次执行不能再发生变化，游客身份持久存储
export const getUUID = () => {
  // 先从本地存储获取uuid（看一下里面是否有）
  let uuidToken = localStorage.getItem('UUIDTOKEN')
  if (!uuidToken) {
    // 生成游客临时身份
    uuidToken = uuidv4()
    // 本地存储一次
    localStorage.setItem('UUIDTOKEN', uuidToken)
  }
  // 一定要有返回值，不然是 undefined
  return uuidToken
}
