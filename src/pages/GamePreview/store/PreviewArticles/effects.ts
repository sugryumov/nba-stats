import { put, call, takeLatest } from 'redux-saga/effects';
import { getPreviewArticlesAction } from './actions';
import dataNba from 'network/dataNba';

function* getPreviewArticlesSaga({ payload }) {
  try {
    const response = yield call([dataNba, dataNba.getPreviewArticles], payload);

    yield put(getPreviewArticlesAction.success(response));
  } catch (error) {
    yield put(getPreviewArticlesAction.failure(error));
  }
}

export function* watchGetPreviewArticles() {
  yield takeLatest(getPreviewArticlesAction.request, getPreviewArticlesSaga);
}
