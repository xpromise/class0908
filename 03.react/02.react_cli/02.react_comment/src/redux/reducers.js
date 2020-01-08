import { ADD_COMMENT, DEL_COMMENT } from './action-types';

// prevState进行状态初始化
const initState = [
  {
    username: 'laofu',
    content: 'I Love peihua',
    id: 1
  },
  {
    username: 'peihua',
    content: 'I Love yangshuai',
    id: 2
  }
];
// 函数名称：管理的state是什么就叫什么
function comments(prevState = initState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...prevState];
    case DEL_COMMENT:
      return prevState.filter(comment => comment.id !== action.data);
    default:
      return prevState;
  }
}

export default comments;
