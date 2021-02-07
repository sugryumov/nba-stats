import { IGetGamesList } from 'pages/Games/store/entities';
import { IStatistics } from 'pages/PlayerStats/store/entities';
import { IStandings } from 'pages/Standings/store/entities';
import { IGameStats } from 'pages/GameStats/store/entities';
import { IGamePreview } from 'pages/GamePreview/store/entities';
import { IStats } from 'pages/Stats/store/entities';

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
