import { all } from 'redux-saga/effects';
import { watchStatistics } from 'containers/PlayerStatistics/store/effects';

export default function* rootSaga() {
  yield all([watchStatistics()]);
}
