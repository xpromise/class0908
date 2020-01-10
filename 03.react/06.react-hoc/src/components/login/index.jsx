import React, { Component } from 'react';

import withForm from '../with-form';

class Login extends Component {
  /* state = {
    username: '',
    password: ''
  };

  login = e => {
    e.preventDefault();
    // 获取表单数据
    const { username, password } = this.state;

    alert(`用户名: ${username}  密码: ${password}`);
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
        <h1>用户登录</h1>
        <form onSubmit={handleSubmit}>
          用户名: <input type='text' onChange={handleChange('username')} />
          <br />
          密码:
          <input type='password' onChange={handleChange('password')} />
          <br />
          <input type='submit' value='登录' />
        </form>
      </div>
    );
  }
}

export default withForm(Login);
