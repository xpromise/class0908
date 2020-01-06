import React, { Component } from 'react';

import Search from './components/search';
import List from './components/list';

export default class App extends Component {
  state = {
    searchName: ''
  }

  // 更新state的方法
  update = (searchName) => {
    this.setState({
      searchName
    })
  }

  render() {
    return (
      <div className='container'>
        <Search update={this.update}/>
        <List searchName={this.state.searchName}/>
      </div>
    );
  }
}
