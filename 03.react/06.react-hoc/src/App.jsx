import React, { Component } from 'react';

import Login from './components/login';
import Register from './components/register';

export default class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Register />
      </div>
    );
  }
}
