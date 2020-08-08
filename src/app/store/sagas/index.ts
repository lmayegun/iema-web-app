import { all, fork} from 'redux-saga/effects';
import {watchGetHomepageArticles} from './homepage.sagas';

export const rootSaga = function* root() {
    yield all([fork(watchGetHomepageArticles)]);
  };