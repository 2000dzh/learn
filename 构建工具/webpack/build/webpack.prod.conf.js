// 生产环境
const path = require('node:path')
const { merge } = require('webpack-merge')
const common = require('./webpack.base.conf.js')

// webpack5 推荐使用 css-minimizer-webpack-plugin 压缩css (比 optimize-css-assets-webpack-plugin 更强)
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// 压缩 js
const TerserPlugin = require('terser-webpack-plugin')

// 复制静态资源 CopyWebpackPlugin

const webpackConfig = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      // 压缩 css
      new CssMinimizerPlugin(),
      // 压缩 js
      new TerserPlugin()
    ],
    usedExports: true,

    // 将 node_modules 中的代码单独打包成一个 chunk 输出,单/多入口都适用(代码分割)
    // https://zhuanlan.zhihu.com/p/590365054
    splitChunks: {
      chunks: 'all',
      // 允许新拆出 chunk 的最小体积，也是异步 chunk 公共模块的强制拆分体积
      minSize: 20 * 1024,
      // 要提取的 chunk 最小被引用1次
      minChunks: 1,
      // 每个异步加载模块最多能被拆分的数量
      maxAsyncRequests: 6,
      // 每个入口和它的同步依赖最多能被拆分的数量
      maxInitialRequests: 6,
      // 强制执行拆分的体积阈值并忽略其他限制
      enforceSizeThreshold: 50000,
      // 分割chunk的组
      cacheGroups: {
        // node_modules文件会被打包到vendors组的chunk中 --> chunk-vendors~xxx.js
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          reuseExistingChunk: true,
          chunks: "initial" // 只打包初始时依赖的第三方
        },
        // echarts单独打包
        echarts: {
          name: 'chunk-echarts',
          // test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          test: /[\\/]node_modules[\\/]echarts[\\/]/,
          priority: 20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [

  ],
})

if (false) {
  //引入打包分析
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}



module.exports = webpackConfig
