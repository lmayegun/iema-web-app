import {combineReducers} from 'redux';

import articleReducer from './article.reducers';

export default 
combineReducers({
  article: articleReducer
}); 