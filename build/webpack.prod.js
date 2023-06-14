const {
  merge
} = require('webpack-merge')
//本插件基于 webpack v5 的新特性构建，并且需要 webpack 5 才能正常工作。
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const commonConfig = require('./webpack.common')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const config = {
  mode,
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            // 启用/禁用或者设置在 css-loader 前应用的 loader 数量
            importLoaders: 1
          }
        },
        'postcss-loader'
      ]
    }, {
      test: /\.styl(us)$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            // 启用/禁用或者设置在 css-loader 前应用的 loader 数量
            importLoaders: 2
          }
        },
        'postcss-loader',
        'stylus-loader'
      ]
    }]
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      new CssMinimizerPlugin(),
      // 这将仅在生产环境开启 CSS 优化。
      // 如果还想在开发环境下启用 CSS 优化，请将 optimization.minimize 设置为 true:
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 决定输出的每个 CSS 文件的名称
      filename: 'css/[name].[contenthash:8].css',

      // 决定非入口的 chunk 文件名称,仅在 webpack@5 下可用
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    }),
    new BundleAnalyzerPlugin()
  ],
  performance: false,
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js'
  }
}

module.exports = merge(commonConfig, config)
