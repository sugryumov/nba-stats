import { put, call, takeLatest } from 'redux-saga/effects';
import { seasonAveragesAction } from './actions';
import network from 'network';

function* seasonAveragesSaga({ payload }) {
  try {
    const response = yield call([network, network.seasonAverages], payload);

    yield put(seasonAveragesAction.success(response));
  } catch (error) {
    yield put(seasonAveragesAction.failure(error));
  }
}

export function* watchSeasonAverages() {
  yield takeLatest(seasonAveragesAction.request, seasonAveragesSaga);
}
