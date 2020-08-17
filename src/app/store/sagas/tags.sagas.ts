import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {articleActionsId} from 'src/app/main/types';

function* getTagsTopRegionWorker(payload : any) {
  const {tag} = payload.payload;

  try{
    const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?tag=${tag}&limit=3`)
                          .then( res => {
                            return res.data;
                          })
                          .catch(err =>{
                            console.log(err);
                          });
    yield put({
      type:'[TAGS TOP REGION] SUCCESS', 
      payload: request
    });
  }catch(e){

  }
}

function* getTagsSecondRegionWorker(payload : any) {
  const {tag} = payload.payload;
  
  try{
    const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?tag=${tag}&limit=6`)
                          .then( res => {
                            return res.data;
                          })
                          .catch(err =>{
                            console.log(err);
                          });
    yield put({
      type:'[TAGS SECOND REGION] SUCCESS', 
      payload: request
    });
  }catch(e){

  }
}

export function* watchGetTagsArticles() {
  yield takeEvery(
    articleActionsId.GET_TAGS_TOP_REGION,
    getTagsTopRegionWorker
  );
  yield takeEvery(
    articleActionsId.GET_TAGS_SECOND_REGION,
    getTagsSecondRegionWorker
  );
}