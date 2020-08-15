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
        case homepageReducersId.NEWS_TEASER_SUCCESS: {
            return{
                ...state,
                newsTeaserState: action.payload
            }
        }
        case homepageReducersId.FEATURES_TEASER_SUCCESS: {
            return{
                ...state,
                featuresTeaserState: action.payload
            }
        }
        default:
            return state
    }
}
