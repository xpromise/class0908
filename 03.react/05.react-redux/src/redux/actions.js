/**
 * 用来创建action对象工厂函数模块
 * action: {type: 操作类型, data: 操作数据}
 *
 * 同步action creators：返回值action对象
 * 异步action creators：返回值是函数，函数接受dispatch作为参数
 */
import { INCREMENT, DECREMENT } from './action-types';

/**
 * 生成做 加法 的action对象 工厂模块
 */
/* function increment(data) {
  return {
    type: 'INCREMENT',
    data
  }
} */
export const increment = data => ({ type: INCREMENT, data });

/**
 * 生成做 减法 的action对象 工厂模块
 */
/* function decrement(data) {
  return {
    type: 'DECREMENT',
    data
  }
} */
export const decrement = data => ({ type: DECREMENT, data });

// 高阶函数
export const incrementAsync = data => {
  return dispatch => {
    // 异步操作
    setTimeout(() => {
      // dispatch就是触发更新的方法
      const action = increment(data);
      dispatch(action);
    }, 1000);
  };
};
