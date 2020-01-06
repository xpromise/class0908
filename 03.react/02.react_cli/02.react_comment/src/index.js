/*
  index.js是脚手架webpack的入口文件。
*/
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// dom元素的id去 public/index.html 找
// JSX语法最终要被babel编译成 js 语法 --> React.createElement
// 凡是使用 JSX 语法，就必须引用 React
ReactDOM.render(<App />, document.getElementById('app'));
