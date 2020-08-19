import { SearchFilterArticles } from 'src/app/main/types';

export default function reducer( state = [], action: SearchFilterArticles ){
    switch (action.type){
        case '[SEARCH] SEARCH RESULTS SUCCESS': {
            return{
                ...state,
                searchResultsState: action.payload
            }
        }
        default:
            return state;
    }
}
