const path = require('node:path')

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: {
    main: path.resolve(__dirname, './src2/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist2'),
    filename: '[name].js',
    clean: true
  },
  optimization: {
    // 命令 webpack 不要压缩生成的代码
    minimize: false,
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        // 禁用默认缓存组
        default: false,

        defaultVendors: {
          minSize: 0,
          minChunks: 2,
          test: /node_modules/
        }
      }
    },
  }
}