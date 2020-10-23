import { ArticleFilter, ArticleActionTypes, articleActionsId } from 'src/app/main/types';

export function getHomepageArticles(payload: ArticleFilter) : ArticleActionTypes {
  return{
      type: articleActionsId.GET_HOMEPAGE_ARTICLES,
      payload
  };
};