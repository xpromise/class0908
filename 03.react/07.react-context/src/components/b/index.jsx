import React, { Component } from 'react';

import userContext from '../../context/user';
import foodContext from '../../context/food';

// 如果组件要使用多个context，就要下面这种
export default class B extends Component {
  render() {
    return (
      <div>
        B....
        <userContext.Consumer>
          {// 内部会调用下面函数，调用函数时，会将Provider传递的数据作为参数传入
          user => {
            console.log(user);
            // 返回值就是要渲染的内容
            return (
              <div>
                <p>姓名: {user.name}</p>
                <p>年龄: {user.age}</p>
              </div>
            );
          }}
        </userContext.Consumer>
        <foodContext.Consumer>
          {food => {
            console.log(food);
          }}
        </foodContext.Consumer>
      </div>
    );
  }
}

// 如果组件只要使用一个context，就要下面这种
/* export default class B extends Component {
  static contextType = userContext;
  // static contextType = foodContext;

  render() {
    // 内部Provider提供的值就会挂载到this.context上
    // console.log(this);
    // console.log(this.context);
    const user = this.context;

    return (
      <div>
        B....
        <div>
          <p>姓名: {user.name}</p>
          <p>年龄: {user.age}</p>
        </div>
      </div>
    );
  }
} */
