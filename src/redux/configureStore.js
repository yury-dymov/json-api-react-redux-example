import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../components/DevTools';

export default function (initialState = {}) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
  ));

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').default)); // eslint-disable-line global-require, max-len
  }

  return store;
}
