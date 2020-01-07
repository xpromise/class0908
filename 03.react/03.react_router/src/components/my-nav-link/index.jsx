import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

// 组件有哪些不确定的量，都要通过props传入
export default function MyNavLink(props) {
  // 工厂函数获取props。（没有state、ref、生命周期）
  // props.children 获取当前组件的子内容
  // console.log(props);

  /* <NavLink
      className='list-group-item'
      activeClassName='my-active'
      to={props.to}
    >
      {props.children}
    </NavLink> */

  return (
    <NavLink
      className='list-group-item'
      activeClassName='my-active'
      // 将props对象上所有属性展开在 NavLink
      // to={props.to}
      // children={props.children}
      {...props}
    />
  );
}
