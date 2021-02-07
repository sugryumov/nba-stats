import { TGetStatsParams } from 'interfaces';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { TGetStatsResponse } from './entities';

const GET_STATS_REQUESTED = '@stats/GET_STATS_REQUESTED';
const GET_STATS_SUCCEEDED = '@stats/GET_STATS_SUCCEEDED';
const GET_STATS_FAILED = '@stats/GET_STATS_FAILED';

export const getStatsAction = createAsyncAction(
  [GET_STATS_REQUESTED, (data: TGetStatsParams) => data],
  [GET_STATS_SUCCEEDED, (response: TGetStatsResponse) => response],
  [GET_STATS_FAILED, (error: Error | null) => error],
)();

const STATS_GROUP_BY = '@stats/STANDINGS_GROUP_BY';

export const statsGroupByAction = createAction(
  STATS_GROUP_BY,
  groupBy => groupBy,
)();
