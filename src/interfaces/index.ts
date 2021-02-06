import { IGetGamesList } from 'containers/Games/store/entities';
import { IStatistics } from 'containers/PlayerStatistics/store/entities';
import { IStandings } from 'containers/Standings/store/entities';
import { IGameStats } from 'containers/GameStats/store/entities';
import { IGamePreview } from 'containers/GamePreview/store/entities';
import { IStats } from 'containers/Stats/store/entities';

export interface IState {
  gamesList: IGetGamesList;
  statistics: IStatistics;
  standings: IStandings;
  gameStats: IGameStats;
  gamePreview: IGamePreview;
  stats: IStats;
}

export type TGetDataRequest = {
  gameDate: string;
  gameId: string;
};

export type TColumns = {
  id: number;
  component: any;
  name: string;
  render?: string[];
  label: string;
  colSpan?: {
    count: number;
    columnName: string;
  };
  styles?: any;
  tooltip?: string;
};

export type TGetStatsParams = 'home_season' | 'home_daily';
