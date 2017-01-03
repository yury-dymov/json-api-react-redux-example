import React, { PropTypes } from 'react';
import Post from '../Post';

const propTypes = {
  question: PropTypes.object.isRequired,
};

function Question({ question }) {
  const postWidgets = (question.posts || []).map(post => <Post key={post.id} post={post} />);

  return (
    <div className="question">
      {question.text}
      {postWidgets}
    </div>
  );
}

Question.propTypes = propTypes;

export default Question;
