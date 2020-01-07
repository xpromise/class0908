import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import MyNavLink from '../my-nav-link';

import News from '../news';
import Message from '../message';

export default function Home() {
  return (
    <div>
      <h1>Home组件....</h1>
      <ul className='nav nav-tabs'>
        <li>
          <MyNavLink to='/home/news'>News</MyNavLink>
        </li>
        <li>
          <MyNavLink to='/home/message'>Message</MyNavLink>
        </li>
      </ul>
      <Switch>
        <Route path='/home/news' component={News} />
        <Route path='/home/message' component={Message} />
        <Redirect to='/home/news' />
      </Switch>
    </div>
  );
}
