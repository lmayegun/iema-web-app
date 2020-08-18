import {ArticleActionTypes} from 'src/app/main/types';

export default function reducer( state = [], action: ArticleActionTypes ){
  switch (action.type){
    case '[ARTICLE] GET ARTICLE SUCCESS': {
      return{
        articleState: action.payload
      }
    }
    default:
      return state;
  }
}
