import { put, call, takeLatest } from 'redux-saga/effects';
import { getStatsAction } from './actions';
import statsNba from 'network/statsNba';

function* getStatsSaga({ payload }) {
  try {
    const response = yield call([statsNba, statsNba.getStats], payload);

    yield put(getStatsAction.success(response));
  } catch (error) {
    yield put(getStatsAction.failure(error));
  }
}

export function* watchStats() {
  yield takeLatest(getStatsAction.request, getStatsSaga);
}
