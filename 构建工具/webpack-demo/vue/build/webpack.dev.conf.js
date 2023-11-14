const path = require('path')
const { merge } = require('webpack-merge')
const Dotenw = require('dotenv-webpack')
const common = require('./webpack.base.conf.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: '8886',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenw({
      path: path.resolve(__dirname, '../.env.development'),
    }),
  ],
})
