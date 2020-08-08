import { all, fork} from 'redux-saga/effects';
import {watchGetArticles} from './homepage.sagas';

export const rootSaga = function* root() {
    yield all([fork(watchGetArticles)]);
  };