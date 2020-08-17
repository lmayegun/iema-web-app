import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {articleActionsId} from 'src/app/main/types';

function* getTopicsTopRegionWorker(payload : any) {
  const {topic} = payload.payload;

  try{
    const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=${topic}&limit=3`)
                          .then( res => {
                            return res.data;
                          })
                          .catch(err =>{
                            console.log(err);
                          });
    yield put({
      type:'[TOPICS TOP REGION] SUCCESS', 
      payload: request
    });
  }catch(e){

  }
}

function* getTopicsSecondRegionWorker(payload : any) {
  const {topic} = payload.payload;
  
  try{
    const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=${topic}&limit=6`)
                          .then( res => {
                            return res.data;
                          })
                          .catch(err =>{
                            console.log(err);
                          });
    yield put({
      type:'[TOPICS SECOND REGION] SUCCESS', 
      payload: request
    });
  }catch(e){

  }
}

export function* watchGetTopicArticles() {
  yield takeEvery(
    articleActionsId.GET_TOPICS_TOP_REGION,
    getTopicsTopRegionWorker
  );
  yield takeEvery(
    articleActionsId.GET_TOPICS_SECOND_REGION,
    getTopicsSecondRegionWorker
  );
}