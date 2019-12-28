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
