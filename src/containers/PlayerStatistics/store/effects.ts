import { all } from 'redux-saga/effects';
import { watchSearchPlayer } from './SearchPlayer/effects';
import { watchSeasonAverages } from './SeasonAverages/effects';

export function* watchStatistics() {
  yield all([watchSearchPlayer(), watchSeasonAverages()]);
}
