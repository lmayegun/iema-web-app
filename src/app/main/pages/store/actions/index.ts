import { SearchFilter, searchActionsId, SearchFilterArticles } from 'src/app/main/types';

export function getSearchedArticles(payload: SearchFilter) : SearchFilterArticles {
  return{
    type: searchActionsId.GET_SEARCH_ARTICLES,
    payload
  };
};