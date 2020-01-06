import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../item';

export default class List extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    del: PropTypes.func.isRequired
  };

  render() {
    // 获取props
    const { comments, del } = this.props;

    const isDisplay = comments.length ? 'none' : 'block';

    return (
      <div className='col-md-8'>
        <h3 className='reply'>评论回复：</h3>
        <h2 style={{ display: isDisplay }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className='list-group'>
          {comments.map(comment => {
            return <Item comment={comment} key={comment.id} del={del}/>;
          })}
        </ul>
      </div>
    );
  }
}
