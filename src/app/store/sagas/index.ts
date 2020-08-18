import { all, fork} from 'redux-saga/effects';
import {watchGetHomepageArticles} from './homepage.sagas';
import {watchGetTopicArticles} from './topics.sagas';
import {watchGetTagsArticles} from './tags.sagas';
import {watchGetArticle} from './article.sagas';

export const rootSaga = function* root() {
    yield all([fork(watchGetHomepageArticles)]);
    yield all([fork(watchGetTopicArticles)]);
    yield all([fork(watchGetTagsArticles)]);
    yield all([fork(watchGetArticle)]);
  };