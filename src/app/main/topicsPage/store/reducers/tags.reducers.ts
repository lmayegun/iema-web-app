import {HomepageState, ArticleActionTypes} from 'src/app/main/types';

const initialState: HomepageState = {
    articles : []
}

export default function reducer( state = initialState, action: ArticleActionTypes ){
    switch (action.type){
        case '[TAGS TOP REGION] SUCCESS': {
            return{
                ...state,
                tagsTopRegionState: action.payload
            }
        }
        case '[TAGS SECOND REGION] SUCCESS': {
            return{
                ...state,
                tagsSecondRegionState: action.payload
            }
        }
        default:
            return state;
    }
}
