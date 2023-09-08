const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: 'static/js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'vue demo',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new VueLoaderPlugin(),
  ],
}
