import { all } from 'redux-saga/effects';
import { watchGetGamesList } from 'pages/Games/store/effects';
import { watchStatistics } from 'pages/PlayerStats/store/effects';
import { watchStandings } from 'pages/Standings/store/effects';
import { watchGameStats } from 'pages/GameStats/store/effects';
import { watchGamePreview } from 'pages/GamePreview/store/effects';
import { watchStats } from 'pages/Stats/store/effects';

export default function* rootSaga() {
  yield all([
    watchGetGamesList(),
    watchStatistics(),
    watchStandings(),
    watchGameStats(),
    watchGamePreview(),
    watchStats(),
  ]);
}
