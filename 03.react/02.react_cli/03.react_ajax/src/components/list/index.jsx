import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

export default class List extends Component {
  state = {
    isLoading: false,
    users: []
  };

  componentDidMount() {
    // 订阅消息
    PubSub.subscribe('SEARCHNAME', (msg, data) => {
      // console.log(msg, data);
      // 接受到search的消息，发送请求
      // 发送请求之前更新成 loading 状态
      this.setState({
        isLoading: true
      });
      // 发送请求，请求数据
      axios
        .get('https://api.github.com/search/users', {
          params: {
            q: data
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
          });

          alert('网络出现故障~');
        });
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
