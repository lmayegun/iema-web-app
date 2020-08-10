import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {articleActionsId, homepageReducersId} from 'src/app/main/types';

function* getHomepageArticlesWorker(payload : any) {
  switch (payload.payload.reducer){
    case homepageReducersId.NEWS_JUMBOTRON:{
      try{
        const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=news`)
                              .then( res => {
                                return res.data;
                              })
                              .catch(err =>{
                                console.log(err);
                              });
        yield put({
          type:homepageReducersId.NEWS_JUMBOTRON_SUCCESS, 
          payload: request.slice(0,1)
        });
      }catch(e){

      }
      break;
    }
    case homepageReducersId.NEWS_TEASER: {
      yield put({
        type: homepageReducersId.NEWS_TEASER_SUCCESS,
        payload: 'latest two news'
      })
      break;
    }
  }
}

export function* watchGetHomepageArticles() {
  yield takeEvery(
    articleActionsId.GET_HOMEPAGE_ARTICLES,
    getHomepageArticlesWorker
  );
}