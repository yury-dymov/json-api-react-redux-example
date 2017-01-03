import React, { PropTypes } from 'react';
import Comment from '../Comment';
import User from '../User';

const propTypes = {
  post: PropTypes.object.isRequired,
};

function Post({ post }) {
  const commentWidgets = (post.comments || []).map(c => <Comment key={c.id} comment={c} />);

  return (
    <div className="post">
      <User user={post.author} />
      {post.text}
      {commentWidgets}
    </div>
  );
}

Post.propTypes = propTypes;

export default Post;
