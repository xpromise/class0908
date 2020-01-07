import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class List extends Component {
  static propTypes = {
    searchName: PropTypes.string.isRequired
  };

  state = {
    isLoading: false,
    users: []
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps); // 代表最新的props {searchName: 'aaa'}
    // console.log(this.props); // 代表上一次的props

    // 发送请求之前更新成 loading 状态
    this.setState({
      isLoading: true
    });
    // 发送请求，请求数据
    axios
      .get('https://api.github.com/searchssss/users', {
        params: {
          q: nextProps.searchName
        }
      })
      .then(response => {
        // map方便遍历想要保留的数据
        // console.log(response.data);
        
        const result = response.data.items.map(item => {
          return {
            name: item.login,
            url: item.html_url,
            img: item.avatar_url
          };
        });
        // console.log(result);

        // 更新state
        this.setState({
          users: result,
          isLoading: false
        });
      })
      .catch(error => {

        this.setState({
          isLoading: false
        })
        
        alert('网络出现故障~');
      });
  }

  render() {
    const { isLoading, users } = this.state;

    if (isLoading) {
      return <h1>loading...</h1>;
    }

    if (users.length) {
      return (
        <div className='row'>
          {users.map((user, index) => {
            return (
              <div className='card' key={index}>
                <a href={user.url}>
                  <img src={user.img} style={{ width: 100 }} />
                </a>
                <p className='card-text'>{user.name}</p>
              </div>
            );
          })}
        </div>
      );
    }

    return <h1>enter name to search</h1>;
  }
}
