import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {articleActionsId, homepageReducersId} from 'src/app/main/types';

function* getHomepageArticlesWorker(payload : any) {
  switch (payload.payload.reducer){
    case homepageReducersId.NEWS_JUMBOTRON:{
      try{
        const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=news&limit=1`)
                              .then( res => {
                                return res.data;
                              })
                              .catch(err =>{
                                console.log(err);
                              });
        yield put({
          type:homepageReducersId.NEWS_JUMBOTRON_SUCCESS, 
          payload: request
        });
      }catch(e){

      }
      break;
    }
    case homepageReducersId.NEWS_TEASER: {
      try{
        const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=news&limit=2&skip=1`)
                              .then( res => {
                                return res.data;
                              })
                              .catch(err =>{
                                console.log(err);
                              });
        yield put({
          type: homepageReducersId.NEWS_TEASER_SUCCESS,
          payload: request
        })
      }catch(e){

      }
      break;
    }
    case homepageReducersId.FEATURES_TEASER: {
      try{
        const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=news&limit=3&skip=1`)
                              .then( res => {
                                return res.data;
                              })
                              .catch(err =>{
                                console.log(err);
                              });
        yield put({
          type: homepageReducersId.FEATURES_TEASER_SUCCESS,
          payload: request
        })
      }catch(e){

      }
      break;
    }
    case homepageReducersId.EDITORS_PICK: {
      try{
        const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=news&limit=1&skip=1`)
                              .then( res => {
                                return res.data;
                              })
                              .catch(err =>{
                                console.log(err);
                              });
        yield put({
          type: homepageReducersId.EDITORS_PICK_SUCCESS,
          payload: request
        })
      }catch(e){

      }
      break;
    }
    case homepageReducersId.PROMOTED_TEASERS: {
      try{
        const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=news&limit=3&skip=1`)
                              .then( res => {
                                return res.data;
                              })
                              .catch(err =>{
                                console.log(err);
                              });
        yield put({
          type: homepageReducersId.PROMOTED_TEASERS_SUCCESS,
          payload: request
        })
      }catch(e){

      }
      break;
    }
    case homepageReducersId.KNOWLEDGE_JUMBOTRON:{
      try{
        const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=news&limit=1&skip=2`)
                              .then( res => {
                                return res.data;
                              })
                              .catch(err =>{
                                console.log(err);
                              });
        yield put({
          type:homepageReducersId.KNOWLEDGE_JUMBOTRON_SUCCESS, 
          payload: request
        });
      }catch(e){

      }
      break;
    }
    case homepageReducersId.KNOWLEDGE_TEASER: {
      try{
        const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=news&limit=2&skip=2`)
                              .then( res => {
                                return res.data;
                              })
                              .catch(err =>{
                                console.log(err);
                              });
        yield put({
          type: homepageReducersId.KNOWLEDGE_TEASER_SUCCESS,
          payload: request
        })
      }catch(e){

      }
      break;
    }
    case homepageReducersId.MOST_POPULAR:{
      try{
        const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?category=news&limit=6`)
                              .then( res => {
                                return res.data;
                              })
                              .catch(err =>{
                                console.log(err);
                              });
        yield put({
          type:homepageReducersId.MOST_POPULAR_SUCCESS, 
          payload: request
        });
      }catch(e){

      }
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