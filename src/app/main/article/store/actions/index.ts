import {ArticleActionTypes, ArticleFilter, articleActionsId} from 'src/app/main/types';

export function getArticle(payload: ArticleFilter): ArticleActionTypes {
  return{
    type: articleActionsId.GET_ARTICLE,
    payload
  }
}