import { TGamePreviewState } from 'containers/GamePreview/store/types';
import { TGamesState } from 'containers/Games/store/types';
import { TGameStatsState } from 'containers/GameStats/store/types';
import { TStandingsState } from 'containers/Standings/store/types';
import { TStatsState } from 'containers/Stats/store/types';

export type TState = {
  games: TGamesState;
  gameStats: TGameStatsState;
  gamePreview: TGamePreviewState;
  standings: TStandingsState;
  stats: TStatsState;
};
