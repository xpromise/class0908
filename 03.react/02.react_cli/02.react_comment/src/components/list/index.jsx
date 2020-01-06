import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../item';

export default class List extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired
  };

  render() {
    // 获取props
    const { comments } = this.props;

    return (
      <div className='col-md-8'>
        <h3 className='reply'>评论回复：</h3>
        <h2 style={{ display: 'none' }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className='list-group'>
          {comments.map(comment => {
            return <Item comment={comment} key={comment.id} />;
          })}
        </ul>
      </div>
    );
  }
}
