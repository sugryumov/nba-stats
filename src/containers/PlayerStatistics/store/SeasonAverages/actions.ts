import { createAsyncAction } from 'typesafe-actions';
import { TSeasonAveragesRequest, TSeasonAveragesResponse } from './entities';

export const SEASON_AVERAGES_REQUESTED =
  '@statistics/SEASON_AVERAGES_REQUESTED';
export const SEASON_AVERAGES_SUCCEEDED =
  '@statistics/SEASON_AVERAGES_SUCCEEDED';
export const SEASON_AVERAGES_FAILED = '@statistics/SEASON_AVERAGES_FAILED';

export const seasonAveragesAction = createAsyncAction(
  [SEASON_AVERAGES_REQUESTED, (params: TSeasonAveragesRequest) => params],
  [SEASON_AVERAGES_SUCCEEDED, (data: TSeasonAveragesResponse) => data],
  [SEASON_AVERAGES_FAILED, (error: Error | null) => error],
)();
