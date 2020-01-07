import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

import Detail from '../detail';

export default class Message extends Component {
  state = {
    messages: []
  };
  // 模拟发送请求得到数据
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messages: [
          { id: 1, message: '消息1' },
          { id: 3, message: '消息3' },
          { id: 4, message: '消息4' }
        ]
      });
    }, 1000);
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <ul>
          {messages.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/home/message/${item.id}`}>{item.message}</Link>
              </li>
            );
          })}
        </ul>
        <Route path='/home/message/:id' component={Detail} />
      </div>
    );
  }
}
