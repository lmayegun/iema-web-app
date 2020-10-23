import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {searchActionsId} from 'src/app/main/types';

function* getSearchWorker(payload : any) {
  const {searchText} = payload.payload;

  try{
    const request = yield axios.get(`https://d8-recruiter-rest-simulator.herokuapp.com/api/articles/?search=${searchText}`)
                          .then( res => {
                            console.log(res.data, 'search results')
                            return res.data;
                          })
                          .catch(err =>{
                            console.log(err);
                          });
    yield put({
      type:'[SEARCH] SEARCH RESULTS SUCCESS', 
      payload: request
    });
  }catch(e){

  }
}

export function* watchSearchArticles() {
  yield takeEvery(
    searchActionsId.GET_SEARCH_ARTICLES,
    getSearchWorker
  );
}