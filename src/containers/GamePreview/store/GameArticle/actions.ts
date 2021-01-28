import { createAsyncAction } from 'typesafe-actions';
import { TGetDataRequest } from 'interfaces';
import { TGetGameArticleResponse } from './entities';

const GET_GAME_ARTICLE_REQUESTED = '@gamePreview/GET_GAME_ARTICLE_REQUESTED';
const GET_GAME_ARTICLE_SUCCEEDED = '@gamePreview/GET_GAME_ARTICLE_SUCCEEDED';
const GET_GAME_ARTICLE_FAILED = '@gamePreview/GET_GAME_ARTICLE_FAILED';

export const getGameArticleAction = createAsyncAction(
  [GET_GAME_ARTICLE_REQUESTED, (params: TGetDataRequest) => params],
  [GET_GAME_ARTICLE_SUCCEEDED, (data: TGetGameArticleResponse) => data],
  [GET_GAME_ARTICLE_FAILED, (error: Error | null) => error],
)();
