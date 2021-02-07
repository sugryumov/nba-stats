import { put, call, takeEvery } from 'redux-saga/effects';
import { getGamesListAction } from './actions';
import dataNba from 'network/dataNba';

function* getGamesListSaga({ payload }) {
  try {
    const response = yield call([dataNba, dataNba.getGames], payload);

    yield put(getGamesListAction.success(response));
  } catch (error) {
    yield put(getGamesListAction.failure(error));
  }
}

export function* watchGetGamesList() {
  yield takeEvery(getGamesListAction.request, getGamesListSaga);
}
