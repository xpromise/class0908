/*
  webpack配置文件， 运行指令：webpack

*/
const { resolve } = require('path');

module.exports = {
  // 入口
  entry: './src/js/app.js',
  // 输出
  output: {
    // 文件名称
    filename: 'built.js',
    // 文件路径
    path: resolve(__dirname, 'build/js')
  },
  // loader
  module: {
    rules: [
      // loader的配置
      {
        // 检测 .css 结尾的文件
        test: /\.css$/,
        // 当这种文件类型需要多个loader处理，用use
        use: [
          // 执行顺序：从下往上，从右往左，从后往前 依次执行
          'style-loader', // 将js文件中css字符串模块，添加到style标签中生效
          'css-loader' // 将css文件里面内容以字符串形式作为一个模块，插入js文件中
        ]
      },
      {
        test: /\.less$/,
        // 当这种文件类型需要一个loader处理，用loader
        // loader: 'less-loader' // 将 Less 编译为 CSS
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  // plugins
  plugins: [],
  // 模式
  mode: 'development'
};
