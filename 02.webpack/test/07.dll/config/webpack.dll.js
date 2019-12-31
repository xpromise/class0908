/*
  dll:  
    单独打包jquery，剩下一个配置文件就不用重复打包jquery
*/

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    jquery: ['jquery']
  },
  output: {
    filename: '[name].dll.js',
    path: resolve(__dirname, '../dll'),
    library: '[name]', // 输出库名（将来引入库的名称）
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: resolve(__dirname, '../dll/manifest.json')
    })
  ],
  mode: 'production'
};
