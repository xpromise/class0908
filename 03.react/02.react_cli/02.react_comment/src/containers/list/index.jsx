import React from 'react';
import { connect } from 'react-redux';
import Item from '../item';

function List(props) {
  // 获取props
  const { comments } = props;

  const isDisplay = comments.length ? 'none' : 'block';

  return (
    <div className='col-md-8'>
      <h3 className='reply'>评论回复：</h3>
      <h2 style={{ display: isDisplay }}>暂无评论，点击左侧添加评论！！！</h2>
      <ul className='list-group'>
        {comments.map(comment => {
          return <Item comment={comment} key={comment.id} />;
        })}
      </ul>
    </div>
  );
}

const ListContainer = connect(
  // 状态数据
  state => ({ comments: state }),
  null
)(List);

export default ListContainer;
