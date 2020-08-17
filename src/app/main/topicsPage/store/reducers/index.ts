import {combineReducers} from 'redux';

import topicsReducer from './topics.reducers';
import tagsReducer from './tags.reducers';

export default 
combineReducers({
  topics: topicsReducer,
  tags: tagsReducer
}) 