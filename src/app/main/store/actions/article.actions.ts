import { ArticleFilter, ArticleActionTypes, GET_ARTICLES } from '../../types';

export function getArticles(payload: ArticleFilter) : ArticleActionTypes {
    
    console.log('topic',payload.topic)
    console.log('reducer', payload.reducer)

    return{
        type: GET_ARTICLES,
        payload
    };
};