import React from 'react';
import './../_CommentsList.scss'
import moment from 'moment';

const Comment = ({ comment }) => {
  return (
      <li className="comments__list-item">
          <img src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" alt="user-avatar" />

          <div className="comment__metaData">
              <h3 className="comment__author">
                  {comment.name}
                  <span className="comment__date">{moment().startOf('day').fromNow()}</span>
              </h3>
              <p className="comment__content">
                  {comment.comment}
              </p>
          </div>
      </li>
  );
};

export default Comment;
