import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './chat';

const sagaMiddeleware = createSagaMiddleware();

const composeEnhancers = compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddeleware)
);

const store = createStore(rootReducer, enhancer);

store.subscribe(()=>{
    console.log('my store', store.getState()); 
  });

export type RootState = ReturnType<typeof rootReducer>

export default store; 