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
  state = {
    comments: [
      {
        username: 'laofu',
        content: 'I Love peihua',
        id: 1
      },
      {
        username: 'peihua',
        content: 'I Love yangshuai',
        id: 2
      }
    ]
  };

  // state在哪，操作state的方法就在哪
  add = (comment) => {
    const { comments } = this.state;
    // 不能修改原数据
    this.setState({
      comments: [comment, ...comments]
    })
  }

  render() {
    const { comments } = this.state;

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
        <div className='container'>
          <Add add={this.add}/>
          <List comments={comments}/>
        </div>
      </div>
    );
  }
}

// 暴露出去
// export default App;
