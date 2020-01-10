/*
  初始化context
*/
import { createContext } from 'react';

// 创建context
/*
  createContext(defaultValue)

  defaultValue什么时候生效：
    当你不是用Provider，只使用Consumer组件，才生效
*/
const foodContext = createContext('banana');

export default foodContext;