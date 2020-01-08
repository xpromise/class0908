import React from 'react';
import { connect } from 'react-redux';
import { delComment } from '../../redux/actions';
import './index.css';

function Item(props) {
  
  const delComment = () => {
    // 获取当前元素的id
    const { id, username } = props.comment;
    if (!window.confirm(`您确认要删除${username}的评论吗?`)) return;
    props.delComment(id);
  };

  const { username, content } = props.comment;

  return (
    <li className='list-group-item'>
      <div className='handle'>
        <button className='del-btn' onClick={delComment}>
          删除
        </button>
      </div>
      <p className='user'>
        <span>{username}</span>
        <span>说:</span>
      </p>
      <p className='centence'>{content}</p>
    </li>
  );
}

const ItemContainer = connect(null, {
  delComment
})(Item);

export default ItemContainer;
