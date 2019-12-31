/*
  shimming：  
    用来向外暴露全局变量，（每个模块就不用引入，可以直接使用）
    优点：可以让代码更简写
    缺点：增加了额外的全局变量
*/

const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  mode: 'production'
};
