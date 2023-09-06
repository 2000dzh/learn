// 生产环境
const { merge } = require('webpack-merge')
const common = require('./webpack.base.conf.js')
// webpack5 推荐使用 css-minimizer-webpack-plugin 压缩css (比 optimize-css-assets-webpack-plugin 更强)
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// 压缩 js
const TerserPlugin = require('terser-webpack-plugin')
// 复制静态资源 CopyWebpackPlugin 

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
})
