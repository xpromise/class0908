import React, { Component } from 'react';

import A from './components/a';

/*
  userContext是一个对象，对象上有两个组件
    Provider 提供者（发布消息）
    Consumer 消费者（订阅消息）
*/
import userContext from './context/user';
import foodContext from './context/food';

export default class App extends Component {
  state = {
    user: {
      name: 'laofu',
      age: 40
    },
    food: 'apple'
  };

  render() {
    return (
      <div>
        App...
        {/* 
          Provider组件可以给其子组件传递数据 
          将user数据传递给 需要使用这个数据的子组件
        */}
        {/* <foodContext.Provider > */}
          <userContext.Provider value={this.state.user}>
            <A />
          </userContext.Provider>
        {/* </foodContext.Provider> */}

      </div>
    );
  }
}
