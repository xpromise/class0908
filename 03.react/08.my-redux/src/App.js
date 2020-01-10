import React, { Component } from 'react';

import store from './redux/store';
import { increment, decrement } from './redux/actions';

export default class App extends Component {
  state = {
    value: 1
  };

  componentDidMount() {
    store.subscribe(() => {
      // 函数中就要重新渲染组件
      // 只会重新渲染App组件
      this.setState({});
    });
  }

  handleChange = e => {
    this.setState({
      value: +e.target.value
    });
  };

  increment = () => {
    // 获取select的value值
    const { value } = this.state;
    // 更新redux的状态数据
    // 调用actions生成action对象
    const action = increment(value);
    // 再调用dispatch方法，触发更新
    // 内部调用reducer函数生成newState
    store.dispatch(action);
  };

  decrement = () => {
    const { value } = this.state;
    store.dispatch(decrement(value));
  };

  incrementIffOdd = () => {
    const { number } = store.getState();
    /* if (number % 2 === 1) {

    } */
    if (number & 1) {
      const { value } = this.state;
      store.dispatch(increment(value));
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      const { value } = this.state;
      store.dispatch(increment(value));
    }, 1000);
  };

  render() {
    // 从redux中，读取状态数据
    const { number } = store.getState();

    return (
      <div>
        <p>click {number} times</p>
        <select onChange={this.handleChange}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIffOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>incrememt async</button>
      </div>
    );
  }
}
