import { put, call, takeLatest } from 'redux-saga/effects';
import { getStandingsAction } from './actions';
import dataNba from 'network/dataNba';

function* getStandingsSaga({ payload }) {
  try {
    const response = yield call([dataNba, dataNba.getStandings], payload);

    yield put(getStandingsAction.success(response));
  } catch (error) {
    yield put(getStandingsAction.failure(error));
  }
}

export function* watchStandings() {
  yield takeLatest(getStandingsAction.request, getStandingsSaga);
}
