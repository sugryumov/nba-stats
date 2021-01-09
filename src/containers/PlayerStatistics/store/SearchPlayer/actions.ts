import { createAsyncAction } from 'typesafe-actions';
import { TSearchPlayerResponse } from './entities';

export const SEARCH_PLAYER_REQUESTED = '@statistics/SEARCH_PLAYER_REQUESTED';
export const SEARCH_PLAYER_SUCCEEDED = '@statistics/SEARCH_PLAYER_SUCCEEDED';
export const SEARCH_PLAYER_FAILED = '@statistics/SEARCH_PLAYER_FAILED';

export const searchPlayerAction = createAsyncAction(
  [SEARCH_PLAYER_REQUESTED, (params: any) => params],
  [SEARCH_PLAYER_SUCCEEDED, (data: TSearchPlayerResponse) => data],
  [SEARCH_PLAYER_FAILED, (error: Error | null) => error],
)();
