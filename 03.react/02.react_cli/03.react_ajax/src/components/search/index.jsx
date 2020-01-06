import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired
  };

  state = {
    searchName: ''
  };

  search = () => {
    // 获取用户输入的值
    const { searchName } = this.state;
    
    if (!searchName) return;

    // 调用父组件方法
    this.props.update(searchName);
  };

  handleChange = e => {
    this.setState({
      searchName: e.target.value
    });
  };

  render() {
    return (
      <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
          <input
            type='text'
            placeholder='enter the name you search'
            onChange={this.handleChange}
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
