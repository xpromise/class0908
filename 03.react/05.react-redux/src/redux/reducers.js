/**
 * 用来根据之前的状态（prevState）和action来生成新状态(newState) 函数模块
 */

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
    default :
      return prevState;  
  }
}

export default number;