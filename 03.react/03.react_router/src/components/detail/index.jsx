import React, { Component } from 'react';

export default class Detail extends Component {
  state = {
    messages: [
      { id: 1, message: '老付 love 老李' },
      { id: 3, message: '老李 love 老王' },
      { id: 4, message: '老王 love 老付' }
    ]
  };

  render() {
    /*
      凡是通过Route加载的组件，就叫做路由组件。
      路由组件就有三个属性：
        history 用来控制浏览器历史记录
          push 添加历史记录
          replace 替换历史记录
          goBack 回退
          goForward 前进
          listen 监听历史记录的变化
        location
          pathname 路径
          state 
        match
          params: {id: 1}
    */

    // 获取params参数
    const id = +this.props.match.params.id;
    // console.log(id);
    const { message } = this.state.messages.find(message => message.id === id);

    return (
      <ul>
        <li>id: {id}</li>
        <li>content: {message}</li>
      </ul>
    );
  }
}
