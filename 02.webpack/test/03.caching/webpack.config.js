/*
  caching：缓存
    hash：每次webpack构建打包都会生成一个唯一的hash
      所有资源共享同一个hash
      问题：只修改js文件，会导致所有文件缓存失效

    chunkhash：每次输出的chunk生成hash  
      问题：如果来源于同一个文件，hash会一样
    
    contenthash：每个文件会根据文件内容生成hash值（每个文件的hash都不一样）  
*/

const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './js/[name].[contenthash:10].js',
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
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[id].[contenthash:10].css'
    }),
    new OptimizeCSSAssetsPlugin()
  ],
  mode: 'production'
};
