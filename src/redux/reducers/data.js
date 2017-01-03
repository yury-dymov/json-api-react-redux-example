import merge from 'lodash/merge';
import { API_DATA_SUCCESS } from '../middleware/api';

const initialState = {
  meta: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case API_DATA_SUCCESS:
      return merge({}, state, action.response);
    default:
      return state;
  }
}
