import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from './sagas'
import rootReducer, {rootReducerAsync} from './chat';

const sagaMiddeleware = createSagaMiddleware();

const store = createStore(
                rootReducer, 
                compose(applyMiddleware(sagaMiddeleware))
            );

store.subscribe(()=>{
    console.log('my store', store.getState()); 
  });

const asyncReducers: any = {};

export const injectReducer = (key: any, reducer: any) => {
    if ( asyncReducers[key] )
    {
        return;
    }
    asyncReducers[key] = reducer;
    store.replaceReducer(rootReducerAsync(asyncReducers));
    return store;
};

sagaMiddeleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>

export default store; 