/**
 * 用来创建action对象工厂函数模块
 * action: {type: 操作类型, data: 操作数据}
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
