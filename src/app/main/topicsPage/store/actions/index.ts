import { ArticleFilter, ArticleActionTypes, articleActionsId } from 'src/app/main/types';

export function getTopicsTopRegion(payload: ArticleFilter) : ArticleActionTypes {
  return{
      type: articleActionsId.GET_TOPICS_TOP_REGION,
      payload
  };
};