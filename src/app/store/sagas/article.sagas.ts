import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {articleActionsId} from 'src/app/main/types';

function* getArticleWorker(payload : any) {
  const {id} = payload.payload;

  try{
    const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/${id}`)
                          .then( res => {
                            return res.data;
                          })
                          .catch(err =>{
                            console.log(err);
                          });
    yield put({
      type:'[ARTICLE] GET ARTICLE SUCCESS', 
      payload: request.article
    });
  }catch(e){

  }
}

export function* watchGetArticle() {
  yield takeEvery(
    articleActionsId.GET_ARTICLE,
    getArticleWorker
  );
};