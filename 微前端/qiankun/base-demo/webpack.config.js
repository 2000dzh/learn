const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, './src/main.js'),
  devServer: {
    proxy: [
      {
        context: ['/vue-demo'],
        target: 'http://172.20.10.7:5500',
        pathRewrite: { '^/vue-demo': '/vue-demo/dist' },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
      filename: 'index.html', // 打包后生成的文件名
      template: path.resolve(__dirname, './public/index.html'),
      inject: true, // 设置向模版注入静态资源的方式
      scriptLoading: 'blocking', //指定scirpt脚本的加载方式，默认使用defer非阻塞的加载方式。
      // favicon: '' //用于给页面配置图标,
      minify: {
        removeComments: true, //去除 HTML 中的注释。
        collapseWhitespace: true, //去除 HTML 中的空白字符
      },
    })
  ],
}

// http://127.0.0.1:5500/vue-demo/main.js => http://127.0.0.1:5500/vue-demo/dist/main.js
