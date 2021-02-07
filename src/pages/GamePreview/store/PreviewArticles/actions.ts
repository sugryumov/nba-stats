import { createAction, createAsyncAction } from 'typesafe-actions';
import { TGetDataRequest } from 'interfaces';
import { TGetPreviewArticlesResponse } from './entities';

const GET_PREVIEW_ARTICLES_REQUESTED =
  '@gamePreview/GET_PREVIEW_ARTICLES_REQUESTED';
const GET_PREVIEW_ARTICLES_SUCCEEDED =
  '@gamePreview/GET_PREVIEW_ARTICLES_SUCCEEDED';
const GET_PREVIEW_ARTICLES_FAILED = '@gamePreview/GET_PREVIEW_ARTICLES_FAILED';

export const getPreviewArticlesAction = createAsyncAction(
  [GET_PREVIEW_ARTICLES_REQUESTED, (params: TGetDataRequest) => params],
  [GET_PREVIEW_ARTICLES_SUCCEEDED, (data: TGetPreviewArticlesResponse) => data],
  [GET_PREVIEW_ARTICLES_FAILED, (error: Error | null) => error],
)();

const CLEAR_PREVIEW_ARTICLES = '@gamePreview/CLEAR_PREVIEW_ARTICLES';

export const clearPreviewArticlesAction = createAction(
  CLEAR_PREVIEW_ARTICLES,
  () => {},
)();
