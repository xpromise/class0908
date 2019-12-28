/*
  webpack配置文件， 运行指令：webpack

*/
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口
  entry: './src/js/app.js',
  // 输出
  output: {
    // 文件名称 -- 入口文件的输出名称
    filename: './js/built.js',
    // 文件路径 -- 所有资源的输出路径
    path: resolve(__dirname, 'build')
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
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192, // 8 * 1024 = 8 kb 小于8kb以下的图片，会被转化成base64
          // [hash:10]取hash值前10位
          // [ext]后缀名。之前文件是什么后缀名，之后就是什么
          name: '[hash:10].[ext]',
          outputPath: 'imgs', // path + outputPath --> build/imgs
          esModule: false // 关闭ES6模块化，使用commonjs，解决html img图片出现 [Object Module] 问题
        }
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|mp3)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'media',
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      // 以 ./src/index.html 为模板创建新的html文件
      // 新文件结构和源文件一样，会自动引入打包生成的资源（js）
      template: './src/index.html'
    })
  ],
  // 模式
  mode: 'development'
};
