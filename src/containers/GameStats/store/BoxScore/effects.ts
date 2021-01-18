import { put, call, takeLatest } from 'redux-saga/effects';
import { getBoxScoreAction } from './actions';
import dataNba from 'network/dataNba';

function* getBoxScoreSaga({ payload }) {
  try {
    const response = yield call([dataNba, dataNba.getBoxScore], payload);

    yield put(getBoxScoreAction.success(response));
  } catch (error) {
    yield put(getBoxScoreAction.failure(error));
  }
}

export function* watchGetBoxScore() {
  yield takeLatest(getBoxScoreAction.request, getBoxScoreSaga);
}
