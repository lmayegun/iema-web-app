// src/store/index.ts
import { combineReducers } from 'redux';
import { chatReducer } from './reducers'

export function rootReducerAsync(reducer: {}){
    return(
        combineReducers({
            chat: chatReducer,
            ...reducer
        })
    );
}

const rootReducer = combineReducers({
                        chat: chatReducer
                    });

export default rootReducer;