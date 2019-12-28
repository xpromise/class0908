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
  - webpack ./src/js/app.js -o /build/js/built.js --mode=development
  - webpack ./src/js/app.js -o /build/js/built.js --mode=production
