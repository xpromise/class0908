import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';

// App是UI组件（被包装组件）
class App extends Component {
  state = {
    value: 1
  };

  handleChange = e => {
    this.setState({
      value: +e.target.value
    });
  };

  increment = () => {
    // 获取select的value值
    const { value } = this.state;
    this.props.increment(value);
  };

  decrement = () => {
    const { value } = this.state;
    this.props.decrement(value);
  };

  incrementIffOdd = () => {
    const { number } = this.props;
    /* if (number % 2 === 1) {

    } */
    if (number & 1) {
      const { value } = this.state;
      this.props.increment(value);
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      const { value } = this.state;
      this.props.increment(value);
    }, 1000);
  };

  render() {
    const { number } = this.props;

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

// 将redux管理的state，以props方式传递给UI组件
// 作用：让容器组件给UI组件传递redux管理的状态数据
/* const mapStateToProps = state => {
  // state就是 store.getState() 返回值
  return {
    number: state
  };
}; */

// 将更新redux状态数据的方法，以props方式传递给UI组件
// 作用：让容器组件给UI组件传递更新redux状态数据的方法
/* const mapDispatchToProps = dispatch => {
  // dispatch 就是 store.dispatch
  return {
    increment: data => {
      // 更新
      const action = increment(data);
      dispatch(action);
    },
    decrement: data => {
      dispatch(decrement(data));
    }
  };
}; */

// AppContainer是容器组件(包装组件)
// const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
const AppContainer = connect(
  // 状态数据
  state => ({ number: state }), 
  // 更新状态数据的方法
  {
    increment,
    decrement
  }
)(App);

export default AppContainer;
