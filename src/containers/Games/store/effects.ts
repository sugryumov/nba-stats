import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchGamesListAction } from './actions';
import dataNba from 'network/dataNba';

function* fetchGamesListSaga({ payload }) {
  try {
    const response = yield call([dataNba, dataNba.getGames], payload);

    yield put(fetchGamesListAction.success(response));
  } catch (error) {
    yield put(fetchGamesListAction.failure(error));
  }
}

export function* watchFetchGamesList() {
  yield takeEvery(fetchGamesListAction.request, fetchGamesListSaga);
}
