import { ISearchPlayer } from './SearchPlayer/entities';
import { ISeasonAverages } from './SeasonAverages/entities';

export interface IStatistics {
  searchPlayer: ISearchPlayer;
  seasonAverages: ISeasonAverages;
}
