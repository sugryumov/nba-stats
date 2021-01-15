import { all } from 'redux-saga/effects';
import { watchConfStandings } from './Conference/effects';

export function* watchStandings() {
  yield all([watchConfStandings()]);
}
