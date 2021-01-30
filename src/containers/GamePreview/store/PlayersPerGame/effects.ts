import { put, call, takeLatest } from 'redux-saga/effects';
import { getPlayersPerGameAction } from './actions';
import dataNba from 'network/dataNba';

function* getPlayersPerGameSaga({ payload }) {
  try {
    const response = yield call([dataNba, dataNba.getPlayersPerGame], payload);

    yield put(getPlayersPerGameAction.success(response));
  } catch (error) {
    yield put(getPlayersPerGameAction.failure(error));
  }
}

export function* watchGetPlayersPerGame() {
  yield takeLatest(getPlayersPerGameAction.request, getPlayersPerGameSaga);
}
