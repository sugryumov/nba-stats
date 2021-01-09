import { all } from 'redux-saga/effects';
import { watchFetchGamesList } from 'containers/GameList/store/effects';
import { watchStatistics } from 'containers/PlayerStatistics/store/effects';

export default function* rootSaga() {
  yield all([watchFetchGamesList(), watchStatistics()]);
}
