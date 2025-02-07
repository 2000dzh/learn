const path = require('node:path')


// const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

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