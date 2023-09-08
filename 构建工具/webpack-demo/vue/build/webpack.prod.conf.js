const path = require('path')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const common = require('./webpack.base.conf.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenw = require('dotenv-webpack')

const webpackConfig = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css',
    }),
    new Dotenw({
      path: path.resolve(__dirname, '../.env.production'),
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  externals: {
    vue: 'Vue',
  },
})

module.exports = webpackConfig
