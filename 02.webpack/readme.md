# webpack

静态模块打包器

## 核心概念

- entry 入口
  - 指示 webpack 以哪个文件为入口开始打包
- output 输出
  - 打包后 bundle 输出到哪里去
- loader 加载器
  - webpack 只能识别 js 和 json 文件，其他文件会直接报错
  - loader 能帮 webpack 加载它识别不了的模块
- plugins 插件
  - 执行任务更加强大的工作（解决 loader 的痛点）
- mode 模式
  - development 开发环境
    - 能将 ES6 模块化语法编译成浏览器能识别的模块化语法
  - production 生产环境
    - 能将 ES6 模块化语法编译成浏览器能识别的模块化语法
    - 压缩 js 代码

## 使用

- 下载

  - npm i webpack webpack-cli -g
  - npm i webpack webpack-cli -D

- 运行指令

  - webpack ./src/js/app.js -o ./build/js/built.js --mode=development
  - webpack ./src/js/app.js -o ./build/js/built.js --mode=production

- 定义 webpack 配置文件

  - webpack.config.js

- 配置 loader

  - 去官网找 loader https://webpack.docschina.org/loaders
  - 下载 loader
  - 不需要引入，直接写配置

- 配置 plugin

  - 去官网找 plugin https://webpack.docschina.org/plugins
  - 下载 plugins
  - 引入 plugins
  - 写配置

- 指令
  - webpack 启动普通配置指令（会有输出文件 build）
  - webpack-dev-server 启动 devServer 配置指令（不会输出，在内存中编译打包）

## loader

- css-loader
  - 用来处理 css 文件
- less-loader
  - 用来处理 less 文件
- url-loader
  - 用来处理图片
- html-loader
  - 用来处理 html 中的 img
- file-loader
  - 用来处理其他资源，如：字体
- eslint-loader
  - 用来对 js 进行语法检查

## plugin

- html-webpack-plugin
  - 用来处理 html 文件

## 常见错误

- Module not found: Error: Can't resolve 'style-loader' in 'C:\Users\XiongJian\Desktop\class0908\class0908-git\02.webpack'
  - 说明 style-loader 没有下载
  - npm i style-loader -D
- Module parse failed: Unexpected character '#' (1:0) You may need an appropriate loader to handle this file type,
  - 文件类型解析失败，webpack 不能识别这种文件类型
  - 需要使用 loader 解析
- Error: Cannot find module 'less'
  - 找不到模块 less，没有下载 less
  - npm i less -D
- Error: EPERM: operation not permitted
  - 操作不被允许，删除文件不能删
  - 因为文件还被 live server 引用着，关闭 live server
- Invalid configuration object.
  - 无效配置对象：webpack 配置对象写错了（单词/配置写错了）

## 总结

* 开发环境
  * HMR 热模块替换
    * css style-loader
    * js module.hot.accept
* 生产环境
  * 提升打包构建速度
    * oneOf 让文件只被一个loader处理
    * cacheDirectory: true 开启babel缓存，让第二次打包速度更快
    * dll 将react单独打包，之后就不用重复打包react
    * thread-loader 多线程打包，让babel-loader任务做的更快（问题: 每个线程都有开销 600ms）
  * 优化构建后代码性能
    * tree shaking 去除无用/多余js代码
      * es6模块化和production（用了插件 - 压缩js插件）
      * package.json  sideEffect: ['*.css']
    * caching 让资源更好的缓存
      * hash / chunkhash / contenthash
    * code splitting 提取公共代码成单独文件，方便复用
      * 多入口
      * 单入口 + optimization.splitChunks.chunks + import动态导入    
    * lazy loading 懒加载  prefetch loading 预加载  
      * import动态导入
    * pwa 离线可访问app 