import { createAction, createAsyncAction } from 'typesafe-actions';
import { TGetStandingsResponse } from './entities';

const GET_STANDINGS_REQUESTED = '@standings/GET_STANDINGS_REQUESTED';
const GET_STANDINGS_SUCCEEDED = '@standings/GET_STANDINGS_SUCCEEDED';
const GET_STANDINGS_FAILED = '@standings/GET_STANDINGS_FAILED';

export const getStandingsAction = createAsyncAction(
  [
    GET_STANDINGS_REQUESTED,
    (groupBy: 'standings_conference' | 'standings_division') => groupBy,
  ],
  [GET_STANDINGS_SUCCEEDED, (data: TGetStandingsResponse) => data],
  [GET_STANDINGS_FAILED, (error: Error | null) => error],
)();

const STANDINGS_GROUP_BY = '@standings/STANDINGS_GROUP_BY';

export const standingsGroupByAction = createAction(
  STANDINGS_GROUP_BY,
  groupBy => groupBy,
)();
