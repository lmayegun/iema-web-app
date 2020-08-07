// src/store/index.ts
import { combineReducers } from 'redux';
import { chatReducer } from './reducers'

const rootReducer = combineReducers({
  chat: chatReducer
})

export default rootReducer;