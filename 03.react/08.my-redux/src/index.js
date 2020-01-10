import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import store from './redux/store';

// 一旦store的状态发生变化，就会触发函数
// 会将所有组件全部重新渲染
/* store.subscribe(() => {
  // 函数中就要重新渲染组件
  ReactDOM.render(<App />, document.getElementById('root'));
}) */

ReactDOM.render(<App />, document.getElementById('root'));
