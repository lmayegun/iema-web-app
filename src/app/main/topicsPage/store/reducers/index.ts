import {combineReducers} from 'redux';

import topicsReducer from './topics.reducers';

export default 
combineReducers({
  articles: topicsReducer
}) 