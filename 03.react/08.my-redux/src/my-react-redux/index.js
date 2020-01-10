/**
 * react-redux向外暴露 { Provider, connect }
 */

import React, { Component } from 'react';

// 初始化context
const context = React.createContext();

/**
 * Provider组件
 * 接受store对象作为属性
 * 作用：给子组件传递store
 */
export function Provider(props) {
  return (
    <context.Provider value={props.store}>{props.children}</context.Provider>
  );
}

/**
 * 高阶组件
 * @param {function} mapStateToProps 状态数据
 * @param {function} mapDispatchToProps 更新状态数据方法
 */
export function connect(mapStateToProps, mapDispatchToProps) {
  /*
    mapStateToProps --> (state) => ({number: state})
    mapDispatchToProps 
        --> (dispatch) => ({ increment: function (data) { xxx }, decrement: ...  })
        --> { increment, decrement }
  */
  return function(UIComponent) {
    return class extends Component {
      static contextType = context;

      componentDidMount() {
        this.context.subscribe(() => {
          // 父组件（容器组件）更新 会导致 所有子组件(UI组件)也更新
          this.setState({});
        });
      }

      render() {
        /*
          目的：将状态数据和更新状态数据的方法传给UI组件
        */
        // 获取store
        const store = this.context;
        // redux管理的状态数据 --> store.getState()
        const currentState = store.getState();
        // 得到要返回给 UI 组件 状态数据 对象
        // {number: state}
        const stateObj = mapStateToProps(currentState);

        /*
          mapDispatchToProps 
            --> 函数
            --> 对象
        */

        // 检查数据类型
        const type = Object.prototype.toString
          .call(mapDispatchToProps)
          .slice(8, -1);
        // 初始化空对象，为了下面给其添加属性
        let dispatchObj = {};

        if (type === 'Function') {
          dispatchObj = mapDispatchToProps(store.dispatch);
        } else if (type === 'Object') {
          /*
            {
              increment: actions,
              decrement
            }
            -->
            {
              increment: function (data) {
                dispatch(increment(data))
              }
            }
          */
          // 提取所有属性： ['increment', 'decrement']
          const keys = Object.keys(mapDispatchToProps);
          // 遍历
          for (let i = 0; i < keys.length; i++) {
            // 获取属性名：increment / decrement
            const key = keys[i];
            // 获取属性值
            const actionCreator = mapDispatchToProps[key];
            dispatchObj[key] = function(data) {
              store.dispatch(actionCreator(data));
            };
          }
        }

        return <UIComponent {...stateObj} {...dispatchObj} />;
      }
    };
  };
}
