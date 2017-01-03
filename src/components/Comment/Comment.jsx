import React, { PropTypes } from 'react';
import User from '../User';

const propTypes = {
  comment: PropTypes.object.isRequired,
};

function Comment({ comment }) {
  return (
    <div className="comment">
      <User user={comment.author} />
      {comment.text}
    </div>
  );
}

Comment.propTypes = propTypes;

export default Comment;
