import { all } from 'redux-saga/effects';
import { watchGetBoxScore } from './BoxScore/effects';

export function* watchGameStats() {
  yield all([watchGetBoxScore()]);
}
