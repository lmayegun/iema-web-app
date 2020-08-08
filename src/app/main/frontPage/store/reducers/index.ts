import {combineReducers} from 'redux';

import homeReducer from './homepage.reducers';

export default combineReducers({
                articles: homeReducer
              }) 