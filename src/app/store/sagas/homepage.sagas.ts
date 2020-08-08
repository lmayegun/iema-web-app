import { put, takeLatest } from 'redux-saga/effects';

import {articleActionsId} from 'src/app/main/types';

function* getArticlesWorker(payload : any) {
  console.log('twicer',payload)
  yield put({type:'[ARTICLES] GET_ARTICLES_SUCCESS'});
}

export function* watchGetArticles() {
  yield takeLatest(
    articleActionsId.GET_ARTICLES,
    getArticlesWorker
  );
}