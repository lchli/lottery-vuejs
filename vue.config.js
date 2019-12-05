module.exports = {
  devServer: {
    proxy: { // 设置代理
      '/api': {
        target: 'http://localhost:50209/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },

  },

}
