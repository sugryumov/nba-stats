import { TGamePreviewState } from 'containers/GamePreview/store/types';
import { TGamesState } from 'containers/Games/store/types';
import { TGameStatsState } from 'containers/GameStats/store/types';

export type TState = {
  games: TGamesState;
  gameStats: TGameStatsState;
  gamePreview: TGamePreviewState;
};
