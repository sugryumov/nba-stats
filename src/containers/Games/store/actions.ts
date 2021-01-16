import { createAction, createAsyncAction } from 'typesafe-actions';
import { TGameListResponse } from './entities';

const FETCH_GAMES_LIST_REQUESTED = '@games/FETCH_GAMES_LIST_REQUESTED';
const FETCH_GAMES_LIST_SUCCEEDED = '@games/FETCH_GAMES_LIST_SUCCEEDED';
const FETCH_GAMES_LIST_FAILED = '@games/FETCH_GAMES_LIST_FAILED';

export const fetchGamesListAction = createAsyncAction(
  [FETCH_GAMES_LIST_REQUESTED, (params: any) => params],
  [FETCH_GAMES_LIST_SUCCEEDED, (data: TGameListResponse) => data],
  [FETCH_GAMES_LIST_FAILED, (error: Error | null) => error],
)();

const SHOW_SCORE_GAME = '@games/SHOW_SCORE_GAME';

export const showScoreGameAction = createAction(
  SHOW_SCORE_GAME,
  (show: boolean) => show,
)();

const CHANGED_GAME_DATE = '@games/CHANGED_GAME_DATE';

export const changedGameDateAction = createAction(
  CHANGED_GAME_DATE,
  (date: string) => date,
)();
