import { ArticleFilter, ArticleActionTypes, articleActionsId } from 'src/app/main/types';

export function getTopicsTopRegion(payload: ArticleFilter) : ArticleActionTypes {
  return{
      type: articleActionsId.GET_TOPICS_TOP_REGION,
      payload
  };
};

export function getTopicsSecondRegion(payload: ArticleFilter) : ArticleActionTypes {
  return{
      type: articleActionsId.GET_TOPICS_SECOND_REGION,
      payload
  };
};

export function getTagsTopRegion(payload: ArticleFilter) : ArticleActionTypes {
  return{
      type: articleActionsId.GET_TAGS_TOP_REGION,
      payload
  };
};

export function getTagsSecondRegion(payload: ArticleFilter) : ArticleActionTypes {
  return{
      type: articleActionsId.GET_TAGS_SECOND_REGION,
      payload
  };
};