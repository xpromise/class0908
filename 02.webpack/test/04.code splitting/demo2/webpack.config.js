/*
  code splitting：代码分割
    作用：提取公共代码成单独文件
    使用：
      1. 通过多入口来分割代码（手动）
      2. optimization.splitChunks.chunks = 'all' 能够提取公共代码成单独文件（自动）

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
  optimization: {
    // 会使用一个插件 SplitChunksPlugin 去代码分割
    splitChunks: {
      chunks: 'all'
    },

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
  }
};
