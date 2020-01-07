import React from 'react';

import MyNavLink from '../my-nav-link';
/*
  Link 用来取代a标签 
    不会刷新页面，不会跳转网址，不会发送请求。
    只能更新 浏览器历史记录（url地址）
  NavLink
    在Link基础上，多一个 active class  
*/

export default function Nav() {
  return (
    <div className='col-xs-2 col-xs-offset-2'>
      <div className='list-group'>
        {/* <MyNavLink to="/about" children={'About'}></MyNavLink> */}
        <MyNavLink to="/about">About</MyNavLink>
        <MyNavLink to="/home">Home</MyNavLink>
      </div>
    </div>
  );
}
