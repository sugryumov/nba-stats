import { TGetStatsParams } from 'interfaces';
import { createAsyncAction } from 'typesafe-actions';
import { TGetStatsResponse } from './entities';

const GET_STATS_REQUESTED = '@stats/GET_STATS_REQUESTED';
const GET_STATS_SUCCEEDED = '@stats/GET_STATS_SUCCEEDED';
const GET_STATS_FAILED = '@stats/GET_STATS_FAILED';

export const getStatsAction = createAsyncAction(
  [GET_STATS_REQUESTED, (data: TGetStatsParams) => data],
  [GET_STATS_SUCCEEDED, (response: TGetStatsResponse) => response],
  [GET_STATS_FAILED, (error: Error | null) => error],
)();
