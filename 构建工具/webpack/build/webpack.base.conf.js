const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 上下文
  context: path.resolve(__dirname, '../'),

  // 单入口打包(打包成一个chunk), HtmlWebpackPlugin 插件不需要设置 chunks 文件会自动引入
  // entry: path.resolve(__dirname, '../src/main.js'),
  // 单文件入口(合并文件打包成一个chunk)
  // entry: [path.resolve(__dirname, '../src/main.js'), path.resolve(__dirname, '../src/header.js')],
  // 多入口打包(打包成多个chunk,也可以进行代码分割)
  entry: {
    app: path.resolve(__dirname, '../src/main.js'),
    header: path.resolve(__dirname, '../src/header.js')
  },


  // 文件名称 (指定名称+目录)
  /**
   * hash 每次打包都会生成一个唯一的hash值
   * chunkhash 入口文件变化重新生成
   * contenthash 文件内容变化重新生成(推荐)
   */
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    // 输入所有文件的公共目录
    path: path.resolve(__dirname, '../dist'),
    // 所有资源的引入公共路径前缀
    publicPath: '/',
    // 非入口chunk的名称,不设置都会走 filename 的方式命名,例如import('./xxx.js')导入的文件
    chunkFilename: '[name]_chunk.js',
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
      // 打包css
      {
        // test: /\.css$/,
        test: /\.s[ac]ss$/i, // 匹配以.sass或.scss结尾的文件名
        // 指定检查的文件路径
        include: path.resolve(__dirname, '../src'),
        // 排除不需要检查的文件路径
        exclude: /node_modules/,
        use: [
          {
            // 创建一个 link 标签
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
          // 图片大小限制,小于10kb使用base64处理
          limit: 10 * 1024,
          // 图片重命名 
          name: 'img/[name].[hash:8].[ext]',
          // 指定打包输入路径
          // outputPath: 
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
        // 指定检查的文件路径
        include: path.resolve(__dirname, '../src'),
        // 排除不需要检查的文件路径
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              // {
              //   // 指定兼容到哪个浏览器版本
              //   targets: {
              //     chrome: '90',
              //     firefox: '60',
              //     ie: '9'
              //   }
              // }
            ],
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
    // 抽离css成单独文件，以 link 标签的形式引入样式文件
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:10].css',
      chunkFilename: '[id].css',
    }),

  ],
}
