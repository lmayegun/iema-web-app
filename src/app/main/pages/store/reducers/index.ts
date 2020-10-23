import {combineReducers} from 'redux';

import searchReducer from './search.reducers';

export default 
combineReducers({
  search: searchReducer
}) 