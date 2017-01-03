import React, { PropTypes } from 'react';

const propTypes = {
  user: PropTypes.object.isRequired,
};

function User({ user }) {
  return <span className="user">{user.name}: </span>;
}

User.propTypes = propTypes;

export default User;
