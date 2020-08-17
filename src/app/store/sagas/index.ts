import { all, fork} from 'redux-saga/effects';
import {watchGetHomepageArticles} from './homepage.sagas';
import {watchGetTopicArticles} from './topics.sagas';

export const rootSaga = function* root() {
    yield all([fork(watchGetHomepageArticles)]);
    yield all([fork(watchGetTopicArticles)]);
  };