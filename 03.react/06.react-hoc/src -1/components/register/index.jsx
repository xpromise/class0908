import React, { Component } from 'react';

import withForm from '../with-form';

class Register extends Component {
  /* state = {
    username: '',
    password: '',
    rePassword: ''
  };

  register = e => {
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
  }; */

  render() {
    const { handleChange, handleSubmit } = this.props;

    return (
      <div>
        <h1>用户注册</h1>
        <form onSubmit={handleSubmit}>
          用户名: <input type='text' onChange={handleChange('username')} />
          <br />
          密码:
          <input type='password' onChange={handleChange('password')} />
          <br />
          确认密码:
          <input type='password' onChange={handleChange('rePassword')} />
          <br />
          <input type='submit' value='注册' />
        </form>
      </div>
    );
  }
}


const NewComp = withForm(Register);

export default NewComp;