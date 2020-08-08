import { put, takeLatest } from 'redux-saga/effects';

import {articleActionsId, homepageReducersId} from 'src/app/main/types';

function* getHomepageArticlesWorker(payload : any) {
  switch (payload.payload.reducer){
    case homepageReducersId.NEWS_JUMBOTRON:{
      yield put({
              type:homepageReducersId.NEWS_JUMBOTRON_SUCCESS, 
              payload: 'a news for jumbotron'
            });
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
  yield takeLatest(
    articleActionsId.GET_HOMEPAGE_ARTICLES,
    getHomepageArticlesWorker
  );
}