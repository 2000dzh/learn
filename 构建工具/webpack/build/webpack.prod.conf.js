// 生产环境
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.base.conf.js')

// webpack5 推荐使用 css-minimizer-webpack-plugin 压缩css (比 optimize-css-assets-webpack-plugin 更强)
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// 压缩 js
const TerserPlugin = require('terser-webpack-plugin')

// 复制静态资源 CopyWebpackPlugin

// 清除无用css
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const glob = require('glob') // 文件匹配模式

const webpackConfig = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  plugins: [
    // new PurgeCSSPlugin({
    //   paths: glob.sync(path.join(__dirname, '../src/**/*'), { nodir: true }),
    // }),
  ],
})

if (false) {
  //引入打包分析
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
