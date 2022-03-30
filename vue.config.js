module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211'
        // 接口中有 api 不需要重写
        // pathRewrite: { '^/api': '' }
      }
    }
  }
}
