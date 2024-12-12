const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
      filename: 'index.html', // 打包后生成的文件名
      template: './public/index.html',
      inject: true, // 设置向模版注入静态资源的方式
      // 1、true或者body：所有JavaScript资源插入到body元素的底部
      // 2、head: 所有JavaScript资源插入到head元素中
      // 3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
      scriptLoading: 'blocking', //指定scirpt脚本的加载方式，默认使用defer非阻塞的加载方式。
      // favicon: '' //用于给页面配置图标,
      minify: {
        removeComments: true, //去除 HTML 中的注释。
        collapseWhitespace: true, //去除 HTML 中的空白字符
      }
    }),
  ]
}