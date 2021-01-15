import { createAsyncAction } from 'typesafe-actions';
import { TConfStandingsResponse } from './entities';

const GET_CONF_STANDINGS_REQUESTED = '@standings/GET_CONF_STANDINGS_REQUESTED';
const GET_CONF_STANDINGS_SUCCEEDED = '@standings/GET_CONF_STANDINGS_SUCCEEDED';
const GET_CONF_STANDINGS_FAILED = '@standings/GET_CONF_STANDINGS_FAILED';

export const confStandingsAction = createAsyncAction(
  GET_CONF_STANDINGS_REQUESTED,
  [GET_CONF_STANDINGS_SUCCEEDED, (data: TConfStandingsResponse) => data],
  [GET_CONF_STANDINGS_FAILED, (error: Error | null) => error],
)();
