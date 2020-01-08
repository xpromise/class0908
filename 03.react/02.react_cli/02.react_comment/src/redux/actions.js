/*
  分析定义action creators：
    看state要进行几种操作
*/

import { ADD_COMMENT, DEL_COMMENT } from './action-types';

// 添加评论同步action
export const addComment = comment => ({ type: ADD_COMMENT, data: comment });
// 删除评论同步action
export const delComment = id => ({ type: DEL_COMMENT, data: id });
