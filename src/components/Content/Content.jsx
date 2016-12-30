import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';

const propTypes = {
  loading: PropTypes.bool,
};

function Content({ loading = false }) {
  return (
    <div>
      <Button loading={loading}>Fetch Data from API</Button>
    </div>
  );
}

Content.propTypes = propTypes;

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Content);
