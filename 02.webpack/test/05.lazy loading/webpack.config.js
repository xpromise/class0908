/*
  lazy loading：懒加载
    懒加载js文件
    使用：import动态导入
*/

const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: { // 单入口
  //   main: './src/js/app.js',
  // },
  entry: './src/js/app.js',
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
  optimization: {
    // 会使用一个插件 SplitChunksPlugin 去代码分割
    splitChunks: {
      chunks: 'all'
    }

    /* splitChunks: {
      chunks: 'all',
      minSize: 30000, 
      minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    } */
  }
};
