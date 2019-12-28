/*
  HMR功能：
    hot module replacement 热模块替换(模块热替换)
    作用：只更新需要更新的模块，其他不变（不用全部刷新，只更新一部分）
*/

const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
          // 因为 style-loader 才能实现 css 的 HMR
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    open: true,
    port: 3000,
    hot: true // 开启HMR
  }
};
