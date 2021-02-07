import { all } from 'redux-saga/effects';
import { watchGetPreviewArticles } from './PreviewArticles/effects';
import { watchGetPlayersPerGame } from './PlayersPerGame/effects';

export function* watchGamePreview() {
  yield all([watchGetPreviewArticles(), watchGetPlayersPerGame()]);
}
