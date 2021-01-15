import { put, call, takeLatest } from 'redux-saga/effects';
import { confStandingsAction } from './actions';
import dataNba from 'network/dataNba';

function* confStandingsSaga() {
  try {
    const response = yield call([dataNba, dataNba.getConfStandings]);

    yield put(confStandingsAction.success(response));
  } catch (error) {
    yield put(confStandingsAction.failure(error));
  }
}

export function* watchConfStandings() {
  yield takeLatest(confStandingsAction.request, confStandingsSaga);
}
