import { all } from 'redux-saga/effects';
import { watchGetGamesList } from 'containers/Games/store/effects';
import { watchStatistics } from 'containers/PlayerStatistics/store/effects';
import { watchStandings } from 'containers/Standings/store/effects';
import { watchGameStats } from 'containers/GameStats/store/effects';

export default function* rootSaga() {
  yield all([
    watchGetGamesList(),
    watchStatistics(),
    watchStandings(),
    watchGameStats(),
  ]);
}
