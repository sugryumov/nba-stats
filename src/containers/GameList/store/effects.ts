import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchGamesListAction } from './actions';
import network from 'network';

function* fetchGamesListSaga({ payload }) {
  try {
    const response = yield call([network, network.fetchGamesResult], payload);

    yield put(fetchGamesListAction.success(response));
  } catch (error) {
    yield put(fetchGamesListAction.failure(error));
  }
}

export function* watchFetchGamesList() {
  yield takeEvery(fetchGamesListAction.request, fetchGamesListSaga);
}
