// webpack默认配置查看: node_modules/webpack/lib/WebpackOptionsDefaulter.js
const path = require('path')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 拆分css,为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载( webpack v5)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 清除无用css
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
const glob = require('glob') // 文件匹配模式

module.exports = {
  mode: 'development',
  // 上下文
  context: path.resolve(__dirname, './'),
  // 1.入口(如果不设置,默认使用 src/index.js 作为入口)
  // entry: './src/main.js',
  // 对象语法,配置多个入口
  entry: {
    app: path.resolve(__dirname, './src/main.js'),
    header: path.resolve(__dirname, './src/header.js'),
  },
  // 2.输出(即使可以存在多个 entry 起点，但只能指定一个 output 配置)
  output: {
    // 本地开发使用 / ,线上环境使用 ./
    // publicPath: './',
    filename: 'static/js/[name].[hash:8].js', // 打包后的文件名称
    path: path.resolve(__dirname, 'dist'), // 打包后的目录
    // path: path.resolve(process.cwd(), 'dist/lib'),
    clean: true, // 清空 dist 文件夹 webpack4需要通过clean-webpack-plugin插件实现
  },
  // 3.loader(用于对模块的源代码进行转换) use都是遵循从右向左解析原则
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
  devServer: {
    compress: true,
    port: 8080,
  },
  // 使用 source map 追踪错误
  devtool: false,
  // devtool: 'cheap-module-eval-source-map' //开发环境下使用
  // 4.插件(插件目的在于解决 loader 无法实现的其他事)
  plugins: [
    // webpack-dev-server 配合 html-webpack-plugin 插件会将 entry 属性指向的 JavaScript 文件自动注入到 HTML 模板文件中
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
      },
      chunks: ['app'], // 如果配置多个入口文件,这里要和 output 的模块名对应
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
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),

    new PurgeCSSPlugin({
      paths: glob.sync(
        [
          path.join(__dirname, '../src/**/*'),
          // `${path.join(__dirname, "../src")}/**/*.tsx`,
          // `${path.join(__dirname, "../public")}/index.html`,
        ],
        { nodir: true }
      ),
      // 忽略指定目录
      ignore: ['node_modules'],
      // 只优化指定的css文件
      only: ['index'],
      safelist () {
        return {
          standard: [
            "body",
            /^el-/ // 过滤以el-开头的类名，哪怕没用到也不删除
          ],
          deep: [/css__module__/],//因为这个插件会导致css模块化的样式被排除再外，所以这里要做个过滤
        }
      }
    }),
  ],
}
