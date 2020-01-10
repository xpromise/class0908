/**
 * redux向外暴露什么？ { createStore, combineReducers }
 */

/**
 * 创建store对象的方法
 * @param {*} reducers
 * @return store对象
 */
export function createStore(reducers) {
  // 集中式储存状态的容器
  let currentState = undefined;
  // 存储 listener 函数的数组
  const listeners = [];

  /**
   * 获取redux管理的状态数据
   */
  function getState() {
    return currentState;
  }

  /**
   * 触发redux状态数据的更新
   */
  function dispatch(action) {
    // 触发reducer函数的调用
    const newState = reducers(currentState, action);
    // 更新store对象状态数据(只能更新redux的数据，不能更新组件)
    currentState = newState;
    // 想办法调用 listener（listener里面会封装this.setState）
    // 调用 listener 就可以更新组件
    listeners.forEach(listener => listener());
  }

  /**
   * 一旦redux状态数据发生变化，就会触发传入的回调函数
   */
  function subscribe(listener) {
    listeners.push(listener);
  }

  // 初始化状态数据
  currentState = reducers(currentState, { type: '@@INIT-REDUX-XXXXX' });

  return {
    getState,
    dispatch,
    subscribe
  };
}

/**
 * 整合多个reducer函数成一个
 * @param {object} reducersObj
 * @return reducer 整合后的reducer函数
 */
export function combineReducers(reducersObj) {
  // reducersObj  --> { number: numberReducer, user: userReducer }
  // 将来prevState一定会作为对象实现
  return function(prevState = {}, action) {
    /*
      返回一个新状态：{ 
        number: numberReducer(prevState.number, action), 
        user: userReducer(prevState.user, action)
      }

      prevState --> { 
        number: numberReducer(prevState, action), 
        user: userReducer(prevState, action)
      }
    */
    // 初始化要返回的新状态数据
    const currentState = {};
    // 提取所有属性名： ['number', 'user']
    const keys = Object.keys(reducersObj);
    // 遍历 keys
    for (let i = 0; i < keys.length; i++) {
      // 取出属性名: number \ user
      const key = keys[i];
      // 获取属性值: reducer函数
      const reducer = reducersObj[key];
      currentState[key] = reducer(prevState[key], action);
    }

    return currentState;
  };
}
