const path = require('node:path')
import { isProd } from '@/utils/general.js'

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  productionSourceMap: false,
  configureWebpack: {
    devtool: isProd ? '' : 'source-map',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    externals: isProd ? {
      vue: 'Vue',
      'vue-router': 'VueRouter'
    } : {}
  }
}