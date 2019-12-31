/*
  code splitting：代码分割
    作用：提取公共代码成单独文件
    使用：
      1. 通过多入口来分割代码

*/

const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { // 多入口（有多少入口，就有多少输出）
    main: './src/js/app.js',
    module2: './src/js/module2.js'
  },
  output: {
    filename: './js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'production',
  
};
