import {HomepageState, ArticleActionTypes} from 'src/app/main/types';

const initialState: HomepageState = {
    articles : []
}

export default function reducer( state = initialState, action: ArticleActionTypes ){
    switch (action.type){
        case '[TOPICS TOP REGION] SUCCESS': {
            return{
                ...state,
                topicsTopRegionState: action.payload
            }
        }
        case '[TOPICS SECOND REGION] SUCCESS': {
            return{
                ...state,
                topicsSecondRegionState: action.payload
            }
        }
        default:
            return state;
    }
}
