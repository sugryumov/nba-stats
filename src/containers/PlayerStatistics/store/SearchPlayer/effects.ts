import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { searchPlayerAction } from './actions';
import network from 'network';

function* searchPlayerSaga({ payload }) {
  try {
    yield delay(1000);
    const response = yield call([network, network.searchPlayers], payload);

    yield put(searchPlayerAction.success(response));
  } catch (error) {
    yield put(searchPlayerAction.failure(error));
  }
}

export function* watchSearchPlayer() {
  yield takeLatest(searchPlayerAction.request, searchPlayerSaga);
}
