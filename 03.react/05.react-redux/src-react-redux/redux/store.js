/**
 * 用来集中式管理状态数据
 * 包含操作状态数据的方法
 * store.getState() 读取状态数据
 * store.dispatch(action) 触发更新状态数据
 * store.subscribe(listener) 监听状态数据的变化
 */

import { createStore } from 'redux';

import reducers from './reducers';

// 创建store对象
const store = createStore(reducers);
// 暴露
export default store;
