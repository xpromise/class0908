import React, { Component } from 'react';

import withForm from '../with-form';

// 装饰器语法会帮你在调用一次，将装饰的类作为参数传入并将最终返回值暴露出去
// 少调用一次
@withForm({ title: '用户登录' })
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
    const { handleChange, handleSubmit, aaa } = this.props;
    console.log(aaa);

    return (
      <form onSubmit={handleSubmit}>
        用户名: <input type='text' onChange={handleChange('username')} />
        <br />
        密码:
        <input type='password' onChange={handleChange('password')} />
        <br />
        <input type='submit' value='登录' />
      </form>
    );
  }
}
// export default withForm({title: '用户登录'})(Login);
export default Login;
