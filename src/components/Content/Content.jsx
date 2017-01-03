import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import build from 'redux-object';
import { test } from '../../redux/actions/test';
import Question from '../Question';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

function Content({ loading = false, dispatch, questions }) {
  function fetchData() {
    dispatch(test());
  }

  const qWidgets = questions.map(q => <Question key={q.id} question={q} />);

  return (
    <div>
      <Button loading={loading} onClick={() => { fetchData(); }}>Fetch Data from API</Button>
      {qWidgets}
    </div>
  );
}

Content.propTypes = propTypes;

function mapStateToProps(state) {
  if (state.data.meta['/test']) {
    const questions = state.data.meta['/test'].data.map(object => build(state.data, 'question', object.id));

    return { questions };
  }

  return { questions: [] };
}

export default connect(mapStateToProps)(Content);
