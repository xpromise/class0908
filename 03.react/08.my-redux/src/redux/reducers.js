/**
 * 用来根据之前的状态（prevState）和action来生成新状态(newState) 函数模块
 */
import { combineReducers } from '../my-redux';

import { INCREMENT, DECREMENT } from './action-types';
// reducer函数名称一般和要管理的状态数据的名称一致
// 在reducer中对状态数据进行初始化
function number(prevState = 0, action) {
  console.log(prevState, action);
  switch (action.type) {
    case INCREMENT:
      return prevState + action.data;
    case DECREMENT:
      return prevState - action.data;
    default:
      return prevState;
  }
}
// 一个reducer函数管理一种状态数据
function user(prevState = { name: 'jack' }, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

/*
  combineReducers: 将多个reducer函数合并成一个函数并返回

  默认暴露一个reducer函数，redux管理的状态数据就是 reducer函数的返回值
  默认暴露 通过 combineReducers 整合多个reducer函数， redux管理的状态数据就是一个对象 { number, user }
    接受的参数 { number: func, user: func }
    返回值 新函数 --> 新函数返回值就是状态数据  { number: 0, user: { ... } }
*/
export default combineReducers({
  number,
  user
});
