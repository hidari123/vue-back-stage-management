// 对外暴露一个函数
export const setToken = (token) => {
  // 持久化存储 token
  sessionStorage.setItem('TOKEN', token)
}

export const getToken = () => {
  return sessionStorage.getItem('TOKEN')
}

export const removeToken = () => {
  return sessionStorage.removeItem('TOKEN')
}
