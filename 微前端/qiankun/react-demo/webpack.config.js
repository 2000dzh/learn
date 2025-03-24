const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { name } = require('./package.json')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js'),
  devServer: {
    port: 8082, // 父应用配置微应用端口，要与微应用端口一致
    // disableHostCheck: true, // 关闭主机检查，使微应用可以被 fetch
    headers: {
      'Access-Control-Allow-Origin': '*' //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
    }
  },
  output: {
    library: `${name}-[name]`, // 微应用的包名，这里与主应用中注册的微应用名称一致
    libraryTarget: 'umd', // 这里设置为umd意思是在 AMD 或 CommonJS 的 require 之后可访问。
    // Webpack 5，需要将 jsonpFunction 替换为 chunkLoadingGlobal
    // jsonpFunction: `webpackJsonp_${name}` // webpack用来异步加载chunk的JSONP 函数。
    chunkLoadingGlobal: `webpackJsonp_${name}`
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