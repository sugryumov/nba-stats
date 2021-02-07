import { createAction, createAsyncAction } from 'typesafe-actions';
import { TGetDataRequest } from 'interfaces';
import { TGetPlayersPerGameResponse } from './entities';

const GET_PLAYERS_PER_GAME_REQUESTED =
  '@gamePreview/GET_PLAYERS_PER_GAME_REQUESTED';
const GET_PLAYERS_PER_GAME_SUCCEEDED =
  '@gamePreview/GET_PLAYERS_PER_GAME_SUCCEEDED';
const GET_PLAYERS_PER_GAME_FAILED = '@gamePreview/GET_PLAYERS_PER_GAME_FAILED';

export const getPlayersPerGameAction = createAsyncAction(
  [GET_PLAYERS_PER_GAME_REQUESTED, (params: TGetDataRequest) => params],
  [GET_PLAYERS_PER_GAME_SUCCEEDED, (data: TGetPlayersPerGameResponse) => data],
  [GET_PLAYERS_PER_GAME_FAILED, (error: Error | null) => error],
)();

const CLEAR_PLAYERS_PER_GAME = '@gamePreview/CLEAR_PLAYERS_PER_GAME';

export const clearPlayersPerGameAction = createAction(
  CLEAR_PLAYERS_PER_GAME,
  () => {},
)();
