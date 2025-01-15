const path = require('node:path')
const webpack = require('webpack')

// https://juejin.cn/post/6844903952140468232?searchId=20250110102705F1BBF2F6208E16F7C6A5#heading-2
// https://wangtunan.github.io/blog/webpack/webpack/optimization.html

module.exports = {
  context: path.resolve(__dirname, '../'),
  mode: 'production',
  entry: {
    vendor: ['lodash-es']
  },
  output: {
    path: path.resolve(__dirname, '../dll'),
    filename: '[name].dll.js',
    library: '[name]_dll'
  },
  optimization: {
    usedExports: true
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_dll',
      path: path.resolve(__dirname, '../dll', '[name].manifest.json')
    })
  ]
}