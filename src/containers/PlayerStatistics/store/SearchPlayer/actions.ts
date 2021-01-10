import { createAsyncAction } from 'typesafe-actions';
import { TSearchPlayerRequest, TSearchPlayerResponse } from './entities';

const SEARCH_PLAYER_REQUESTED = '@statistics/SEARCH_PLAYER_REQUESTED';
const SEARCH_PLAYER_SUCCEEDED = '@statistics/SEARCH_PLAYER_SUCCEEDED';
const SEARCH_PLAYER_FAILED = '@statistics/SEARCH_PLAYER_FAILED';

export const searchPlayerAction = createAsyncAction(
  [SEARCH_PLAYER_REQUESTED, (params: TSearchPlayerRequest) => params],
  [SEARCH_PLAYER_SUCCEEDED, (data: TSearchPlayerResponse) => data],
  [SEARCH_PLAYER_FAILED, (error: Error | null) => error],
)();
