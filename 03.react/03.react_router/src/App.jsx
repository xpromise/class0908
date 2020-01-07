import React, { Component } from 'react';

import {
  BrowserRouter as Router, // 引入 BrowserRouter 重命名为 Router
  HashRouter ,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

/*
  BrowserRouter history模式
  HashRouter hash模式
    Router要求必须在最外面使用。（目的：为了包裹所有组件 --> 为了让其他所有组件都是Router的子组件，这样就能得到history对象）

  Route 根据url的变化加载组件  
  Redirect 重定向: 能匹配所有路径，匹配上就修改url地址
  Switch 切换。
    正常情况下，可以匹配多个Route
    加了Switch，就只能匹配一个, 从上到下匹配
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
                  {/* 
                      半匹配：以xxx开头就行 
                      全匹配  exact
                   */}
                  <Switch>
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                    <Redirect to='/about' />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
