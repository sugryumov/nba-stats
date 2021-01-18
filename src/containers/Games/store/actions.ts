import { createAction, createAsyncAction } from 'typesafe-actions';
import { TGameListResponse } from './entities';

const GET_GAMES_LIST_REQUESTED = '@games/GET_GAMES_LIST_REQUESTED';
const GET_GAMES_LIST_SUCCEEDED = '@games/GET_GAMES_LIST_SUCCEEDED';
const GET_GAMES_LIST_FAILED = '@games/GET_GAMES_LIST_FAILED';

export const getGamesListAction = createAsyncAction(
  [GET_GAMES_LIST_REQUESTED, (params: any) => params],
  [GET_GAMES_LIST_SUCCEEDED, (data: TGameListResponse) => data],
  [GET_GAMES_LIST_FAILED, (error: Error | null) => error],
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
