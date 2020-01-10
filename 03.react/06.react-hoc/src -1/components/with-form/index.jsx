import React, { Component } from 'react';

/*
  高阶组件（HOC high order component）
    作用：复用多个组件的代码（提取公共代码去复用）
    概念：本质上就是一个函数，执行函数接受一个组件(被包装组件)作为参数，返回值是一个新组件(包装组件)
*/
export default function withForm(WrappedComponent) {
  return class extends Component {
    // 新组件（包装组件）内部复用代码
    // 给组件命名， displayName优先级比组件名称name更高
    static displayName = `Form(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    state = {
      username: '',
      password: '',
      rePassword: ''
    };

    handleSubmit = e => {
      e.preventDefault();
      // 获取表单数据
      const { username, password, rePassword } = this.state;

      alert(`用户名: ${username}  密码: ${password} 确认密码: ${rePassword}`);
    };

    handleChange = key => {
      return e => {
        this.setState({
          [key]: e.target.value
        });
      };
    };

    render() {
      return (
        <WrappedComponent
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      );
    }
  };
}
