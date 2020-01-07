import React, { Component } from 'react';

import { 
  BrowserRouter as Router, // 引入 BrowserRouter 重命名为 Router
  HashRouter 
} from 'react-router-dom';

/*
  BrowserRouter history模式
  HashRouter hash模式
    Router要求必须在最外面使用。（目的：为了包裹所有组件 --> 为了让其他所有组件都是Router的子组件，这样就能得到history对象）
*/

import Nav from './components/nav';
import About from './components/about';
import Home from './components/home';

export default class App extends Component {
  render() {
    return (
      // 最外面放置Router
      <Router>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <Nav />
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                <div>
                  {/* <Home /> */}
                  <About />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
