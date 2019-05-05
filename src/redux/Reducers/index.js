import { combineReducers } from 'redux';

import app from './app';
import content from './content';

export default combineReducers({
  app,
  content
})