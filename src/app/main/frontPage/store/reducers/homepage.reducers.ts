import {homepageReducersId, HomepageState, ArticleActionTypes} from 'src/app/main/types';

const initialState: HomepageState = {
    articles : []
}

export default function reducer( state = initialState, action: ArticleActionTypes ){
    switch (action.type){
        case homepageReducersId.NEWS_JUMBOTRON_SUCCESS: {
            return{
                ...state,
                newsJumbotronState: action.payload
            }
        }
        default:
            return state
    }
}
