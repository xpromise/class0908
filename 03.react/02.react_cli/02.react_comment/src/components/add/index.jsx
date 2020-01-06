import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Add extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  };

  state = {
    username: '',
    content: ''
  };

  id = 3;

  // 点击按钮，添加评论回调函数
  addComment = e => {
    // 禁止默认行为
    e.preventDefault();
    // 收集数据
    const { username, content } = this.state;
    // 如果值为空，就不添加
    if (!username || !content) return;
    // 添加评论
    this.props.add({ username, content, id: this.id++ });
    // 清空表单数据
    this.setState({
      username: '',
      content: ''
    });
  };

  handleChange = key => {
    return e => {
      this.setState({
        [key]: e.target.value
      });
    };
  };

  render() {
    const { username, content } = this.state;

    return (
      <div className='col-md-4'>
        <form className='form-horizontal' onSubmit={this.addComment}>
          <div className='form-group'>
            <label>用户名</label>
            <input
              type='text'
              className='form-control'
              placeholder='用户名'
              onChange={this.handleChange('username')}
              value={username}
            />
          </div>
          <div className='form-group'>
            <label>评论内容</label>
            <textarea
              className='form-control'
              rows='6'
              placeholder='评论内容'
              onChange={this.handleChange('content')}
              value={content}
            ></textarea>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
              <button type='submit' className='btn btn-default pull-right'>
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
