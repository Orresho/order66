import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/Reducers/app';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger({
  collapsed: true
})

export default function configureStore() {
  const middleware = compose(applyMiddleware(thunk, logger))

  const store = createStore(
    rootReducer,
    middleware
  );

  return store;
}