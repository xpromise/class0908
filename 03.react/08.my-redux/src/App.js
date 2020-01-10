import React, { Component } from 'react';

// import store from './redux/store';
import { connect } from './my-react-redux';
import { increment, decrement } from './redux/actions';

class App extends Component {
  state = {
    value: 1
  };

  /* componentDidMount() {
    store.subscribe(() => {
      // 函数中就要重新渲染组件
      // 只会重新渲染App组件
      this.setState({});
    });
  } */

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
    // 从redux中，读取状态数据
    // const { number } = store.getState();
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

export default connect(
  state => ({ number: state.number }),
  /* dispatch => ({
    increment: function(data) {
      dispatch(increment(data));
    },
    decrement: function(data) {
      dispatch(decrement(data));
    }
  }) */
  {
    increment,
    decrement
  }
)(App);
