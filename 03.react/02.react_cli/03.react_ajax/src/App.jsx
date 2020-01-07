import React from 'react';

import Search from './components/search';
import List from './components/list';

// 当组件没有使用生命周期函数、state、ref的时候，就要改成工厂函数组件
export default function App() {
  return (
    <div className='container'>
      <Search />
      <List />
    </div>
  );
}
