import { all } from 'redux-saga/effects';
import { watchStatistics } from 'containers/PlayerStatistics/store/effects';
import { watchStandings } from 'containers/Standings/store/effects';
import { watchStats } from 'containers/Stats/store/effects';

export default function* rootSaga() {
  yield all([watchStatistics(), watchStandings(), watchStats()]);
}
