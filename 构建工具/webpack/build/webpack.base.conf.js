const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
    header: path.resolve(__dirname, '../src/header.js')
  },
  output: {
    filename: 'static/js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  // 解析
  resolve: {
    //当我们代码中出现 import 'vue'时， webpack会采用向上递归搜索的方式去node_modules 目录下找。为了减少搜索范围我们可以直接告诉webpack去哪个路径下查找。也就是别名(alias)的配置。
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    //webpack会根据extensions定义的后缀查找文件(频率较高的文件类型优先写在前面)
    extensions: ['.js', 'json'],
  },
  module: {
    rules: [
      // 处理css
      {
        // test: /\.css$/,
        test: /\.s[ac]ss$/i, // 匹配以.sass或.scss结尾的文件名
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // {
          //   动态创建 style 标签，将 css 插入到 head 中
          //   loader: 'style-loader',
          // },
          {
            // 将 CSS 转化成 CommonJS 模块
            loader: 'css-loader',
          },
          {
            // 对于不同浏览器css属性进行兼容性处理
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            // 将 Sass 编译成 CSS
            loader: 'sass-loader',
          },
        ],
      },
      // 处理图像
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        //表示将图片文件作为独立的资源文件进行处理，即每个图片文件将被复制到输出目录，并生成一个哈希值作为文件名，然后在代码中使用该哈希值引用该图片文件
        // type: 'asset/resource'
        loader: 'url-loader',
        options: {
          limit: 10000, // 10,000字节（10KB)
          name: 'img/[name].[hash:8].[ext]',
        },
      },
      // 处理字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:8].[ext]',
        },
      },
      // 将JS转义为低版本(将 ES6/7/8语法转换为ES5语法)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              // 支持对象的扩展语法，即对象的解构和合并
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      chunks: ['app'],
    }),
    new HtmlWebpackPlugin({
      filename: 'header.html', // 打包后生成的文件名
      template: './public/header.html',
      inject: true, // 设置向模版注入静态资源的方式
      // 1、true或者body：所有JavaScript资源插入到body元素的底部
      // 2、head: 所有JavaScript资源插入到head元素中
      // 3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
      scriptLoading: 'blocking', //指定scirpt脚本的加载方式，默认使用defer非阻塞的加载方式。
      // favicon: '' //用于给页面配置图标,
      minify: {
        removeComments: true, //去除 HTML 中的注释。
        collapseWhitespace: true, //去除 HTML 中的空白字符
      },
      chunks: ['header'],
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css',
      chunkFilename: '[id].css',
    }),
  ],
}
