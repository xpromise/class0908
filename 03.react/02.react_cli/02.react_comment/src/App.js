/*
  所有组件要使用的库都得引入
*/
import React, { Component } from 'react';
// 等价于
// import React from 'react';
// import { Component } from 'react';

// 引入其他组件
import Add from './components/add';
import List from './components/list';

export default class App extends Component {
  render() {
    return (
      <div>
        <header className='site-header jumbotron'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add />
          <List />
        </div>
      </div>
    );
  }
}

// 暴露出去
// export default App;