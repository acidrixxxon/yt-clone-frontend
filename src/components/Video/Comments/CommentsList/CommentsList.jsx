import React from 'react';
import Comment from './CommentItem/Comment';
import './_CommentsList.scss'

const CommentsList = () => {
const comments = [{ name: 'Akim',comment: 'Hui tebe loh'},{ name: 'Sasha', comment: 'Nehochu,sam takoi!'}]


  return (
    <div className="comments">
        <ul className="comments__list">
            {comments.map((comment,index) => {
                return <Comment comment={comment} key={index} />
            })}
        </ul>
    </div>
  );
};

export default CommentsList;
