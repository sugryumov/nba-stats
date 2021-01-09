import { all } from 'redux-saga/effects';
import { watchSearchPlayer } from './SearchPlayer/effects';

export function* watchStatistics() {
  yield all([watchSearchPlayer()]);
}
