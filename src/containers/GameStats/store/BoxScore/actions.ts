import { createAsyncAction } from 'typesafe-actions';
import { TGetBoxScoreRequest, TGetBoxScoreResponse } from './entities';

const GET_BOX_SCORE_REQUESTED = '@gameStats/GET_BOX_SCORE_REQUESTED';
const GET_BOX_SCORE_SUCCEEDED = '@gameStats/GET_BOX_SCORE_SUCCEEDED';
const GET_BOX_SCORE_FAILED = '@gameStats/GET_BOX_SCORE_FAILED';

export const getBoxScoreAction = createAsyncAction(
  [GET_BOX_SCORE_REQUESTED, (params: TGetBoxScoreRequest) => params],
  [GET_BOX_SCORE_SUCCEEDED, (data: TGetBoxScoreResponse) => data],
  [GET_BOX_SCORE_FAILED, (error: Error | null) => error],
)();
