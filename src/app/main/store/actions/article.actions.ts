import { ArticleFilter, ArticleActionTypes, articleActionsId } from 'src/app/main/types';

export function getArticles(payload: ArticleFilter) : ArticleActionTypes {
    
    console.log('topic',payload.topic)
    console.log('reducer', payload.reducer)

    return{
        type: articleActionsId.GET_ARTICLES,
        payload
    };
};