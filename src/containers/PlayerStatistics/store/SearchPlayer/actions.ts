import { createAction, createAsyncAction } from 'typesafe-actions';
import { TPlayer } from 'interfaces';
import { TSearchPlayerRequest, TSearchPlayerResponse } from './entities';

const SEARCH_PLAYER_REQUESTED = '@statistics/SEARCH_PLAYER_REQUESTED';
const SEARCH_PLAYER_SUCCEEDED = '@statistics/SEARCH_PLAYER_SUCCEEDED';
const SEARCH_PLAYER_FAILED = '@statistics/SEARCH_PLAYER_FAILED';

export const searchPlayerAction = createAsyncAction(
  [SEARCH_PLAYER_REQUESTED, (params: TSearchPlayerRequest) => params],
  [SEARCH_PLAYER_SUCCEEDED, (data: TSearchPlayerResponse) => data],
  [SEARCH_PLAYER_FAILED, (error: Error | null) => error],
)();

const CHANGED_PLAYER = '@statistics/CHANGED_PLAYER';

export const changedPlayerAction = createAction(
  CHANGED_PLAYER,
  (changedPlayer: Array<TPlayer>) => changedPlayer,
)();
