import { put, call, takeLatest } from 'redux-saga/effects';
import { getGameArticleAction } from './actions';
import dataNba from 'network/dataNba';

function* getGameArticleSaga({ payload }) {
  try {
    const response = yield call([dataNba, dataNba.getGamePreview], payload);

    yield put(getGameArticleAction.success(response));
  } catch (error) {
    yield put(getGameArticleAction.failure(error));
  }
}

export function* watchGetGameArticle() {
  yield takeLatest(getGameArticleAction.request, getGameArticleSaga);
}
