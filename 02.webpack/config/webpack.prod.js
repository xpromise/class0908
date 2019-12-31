/*
  webpack配置文件， 运行指令：webpack
*/
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  // 入口
  entry: './src/js/app.js',
  // 输出
  output: {
    // 文件名称 -- 入口文件的输出名称
    filename: 'js/[name].[contenthash:10].js',
    // 文件路径 -- 所有资源的输出路径（输出到本地哪个目录）
    path: resolve(__dirname, '../build'),
    // 所有资源的引入路径 （资源link、url引入的路径）
    publicPath: '/'
  },
  // loader
  module: {
    rules: [
      // loader的配置
      {
        // 以下loader只会命中一个
        // webpack构建打包速度更快
        oneOf: [
          {
            // 检测 .css 结尾的文件
            test: /\.css$/,
            // 当这种文件类型需要多个loader处理，用use
            use: [
              // 执行顺序：从下往上，从右往左，从后往前 依次执行
              MiniCssExtractPlugin.loader,
              'css-loader', // 将css文件里面内容以字符串形式作为一个模块，插入js文件中
              {
                // css的兼容性处理
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: loader => [
                    require('postcss-import')({ root: loader.resourcePath }),
                    require('postcss-preset-env')(),
                    require('cssnano')()
                  ]
                }
              }
            ]
          },
          {
            test: /\.less$/,
            // 当这种文件类型需要一个loader处理，用loader
            // loader: 'less-loader' // 将 Less 编译为 CSS
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                // css的兼容性处理
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: loader => [
                    require('postcss-import')({ root: loader.resourcePath }),
                    require('postcss-preset-env')(),
                    require('cssnano')()
                  ]
                }
              },
              'less-loader'
            ]
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
          },
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      // polyfill 按需加载
                      targets: {
                        edge: '17',
                        firefox: '60',
                        chrome: '67',
                        safari: '11.1',
                        ie: '9'
                      },
                      useBuiltIns: 'usage',
                      corejs: {
                        version: 3
                      }
                    }
                  ]
                ],
                // 开启babel缓存
                // webpack构建打包速度(第二次)更快
                cacheDirectory: true
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        // 排除node_modules
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre', // 优先执行
        options: {
          // 自动修复部分 eslint 报的错
          fix: true
        }
      }
    ]
  },
  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      // 以 ./src/index.html 为模板创建新的html文件
      // 新文件结构和源文件一样，会自动引入打包生成的资源（js）
      template: './src/index.html',
      minify: {
        // 压缩html
        collapseWhitespace: true, // 移除空格
        removeComments: true, // 移除注释
        removeRedundantAttributes: true, // 当值匹配默认值时删除属性。
        removeScriptTypeAttributes: true, // type="text/javascript"从script标签中删除。
        removeStyleLinkTypeAttributes: true, // type="text/css"从style和link标签中删除。
        useShortDoctype: true // 使用HTML5 doctype
      }
    }),
    new MiniCssExtractPlugin({
      // 提取ccs成单独文件
      filename: 'css/[name].[contenthash:10].css',
      chunkFilename: 'css/[id].[contenthash:10].css'
    }),
    // 清除output.path中所有文件
    new CleanWebpackPlugin(),
    // 压缩css
    new OptimizeCSSAssetsPlugin(),
    // 性能分析：需要时开启
    // new BundleAnalyzerPlugin()
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  // 模式
  mode: 'production',
  // 源代码映射文件
  /*
    基本：source-map
    前缀: 
      eval 将source-map文件整合到js中
      inline 将source-map文件整合到js中
      cheap 只精确到行
      module 能将node_modules中的整合进来
      
    https://webpack.docschina.org/configuration/devtool/  
  */
  devtool: 'source-map',
  resolve: {
    // 路径别名： 优点：简化路径写法  缺点：路径没有提示
    alias: {
      $css: resolve(__dirname, '../src/css')
    }
    // 可省略的文件后缀名
    // extensions: ['.js', '.json', '.jsx']
  },
  externals: {
    // jquery是包名  jQuery全局变量名称
    // jquery包就不会被webpack打包
    // jquery: 'jQuery'
  },
  optimization: {
    // 分割 node_modules 大于30kb的模块
    splitChunks: {
      chunks: 'all'
    }
  }
};
