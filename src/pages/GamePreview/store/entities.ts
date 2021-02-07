import { IGetPlayersPerGame } from './PlayersPerGame/entities';
import { IGetPreviewArticles } from './PreviewArticles/entities';

export interface IGamePreview {
  previewArticles: IGetPreviewArticles;
  playersPerGame: IGetPlayersPerGame;
}

export type TTabsGamePreviewValue = 'articles' | 'players';
