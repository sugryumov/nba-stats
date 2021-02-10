import { TPlayersPerGameState } from './PlayersPerGame/types';
import { TPreviewArticlesState } from './PreviewArticles/types';

export type TGamePreviewState = {
  playersPerGame: TPlayersPerGameState;
  previewArticles: TPreviewArticlesState;
};

export type TTabsGamePreviewValue = 'articles' | 'players';
