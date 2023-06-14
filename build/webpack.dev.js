const {
  merge
} = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common')
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const config = {
  mode,
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    port: 3000,
    open: false,
    hot: true,
    // 配置history路由模式,否则会把路由到get接口请求
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
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
        'style-loader',
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
    }, {
      test: /\.ts$/,
      loader: "ts-loader",
      // 配置ts-loader，让它能够编译.vue文件中的ts代码
      options: {
        // configFile指定tsconfig.json文件，appendTsSuffixTo指定哪些文件需要添加.ts后缀
        configFile: path.resolve(process.cwd(), "tsconfig.json"),
        appendTsSuffixTo: [/\.vue$/],
      },
    }]
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js'
  }
}

module.exports = merge(commonConfig, config)