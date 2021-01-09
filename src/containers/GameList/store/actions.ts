import { createAsyncAction } from 'typesafe-actions';
import { TGameListResponse } from './entities';

export const FETCH_GAMES_LIST_REQUESTED = '@games/FETCH_GAMES_LIST_REQUESTED';
export const FETCH_GAMES_LIST_SUCCEEDED = '@games/FETCH_GAMES_LIST_SUCCEEDED';
export const FETCH_GAMES_LIST_FAILED = '@games/FETCH_GAMES_LIST_FAILED';

export const fetchGamesListAction = createAsyncAction(
  [FETCH_GAMES_LIST_REQUESTED, (params: any) => params],
  [FETCH_GAMES_LIST_SUCCEEDED, (data: TGameListResponse) => data],
  [FETCH_GAMES_LIST_FAILED, (error: Error | null) => error],
)();
