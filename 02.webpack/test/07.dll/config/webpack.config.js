/*
 */

const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './js/[name].[contenthash:10].js',
    path: resolve(__dirname, '../build')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, '../dll/manifest.json')
    }),
    // 添加资源
    new AddAssetHtmlPlugin({
      filepath: resolve(__dirname, '../dll/jquery.dll.js'),
      outputPath: 'js', // 文件输出路径
      publicPath: 'js', // 文件引入路径
    })
  ],
  mode: 'production'
};
