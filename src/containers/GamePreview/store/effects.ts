import { all } from 'redux-saga/effects';
import { watchGetGameArticle } from './GameArticle/effects';

export function* watchGamePreview() {
  yield all([watchGetGameArticle()]);
}
