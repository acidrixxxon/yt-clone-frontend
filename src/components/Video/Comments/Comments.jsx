import React from 'react';
import AddField from './AddCommetsField/AddField';
import CommentsList from './CommentsList/CommentsList';
import './_comments.scss'

const Comments = () => {
  return (
    <div className='comments'>
        <h2 className="comments__number">926 комментария</h2>
        <AddField />
        <CommentsList />
    </div>
  );
};

export default Comments;
