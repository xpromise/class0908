/*
  tree shaking：树摇
    功能：去除无用的(js)代码
    使用：
      1. 必须使用ES6模块化
      2. 需要将webpack环境调为生产环境（会压缩js代码，会开启tree shaking）
    
    package.json配置：
      sideEffects: false 所有资源都没有副作用（所有资源都可以进行tree shaking）

      sideEffects: [ '*.css', '*.less' ] 样式资源有副作用（不要进行tree shaking）
*/

const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 提取ccs成单独文件
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new OptimizeCSSAssetsPlugin()
  ],
  mode: 'production'
};
