'use strict'
const path = require('path')
module.exports = {
  dev: {
    proxyTable: {
      '/api': {
        target: 'http://localhost:50209',//后端接口地址
        changeOrigin: true,//是否允许跨越
        pathRewrite: {
          '^/api': '/api',//重写,
        }
      }
    },

  },

}
