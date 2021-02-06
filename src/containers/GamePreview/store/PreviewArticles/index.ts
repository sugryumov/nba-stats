import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network/dataNba';
import { TGetDataRequest } from 'interfaces';
import { TPreviewArticlesResponse, TPreviewArticlesState } from './types';

export const fetchGamePreviewArticles = createAsyncThunk(
  'gamePreview/fetchGamePreviewArticles',
  async (data: TGetDataRequest) =>
    ((await network.getPreviewArticles(
      data,
    )) as unknown) as TPreviewArticlesResponse,
);

const initialState = {
  response: {
    paragraphs: [],
    pubDateUTC: '',
    title: '',
  },
  error: null,
  loading: false,
} as TPreviewArticlesState;

const gamesPreviewArticlesSlice = createSlice({
  name: 'gamePreviewArticles',
  initialState,
  reducers: {
    clearPreviewArticlesAction(state) {
      state.response = {
        paragraphs: [],
        pubDateUTC: '',
        title: '',
      };
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchGamePreviewArticles.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      fetchGamePreviewArticles.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.response = payload;
      },
    );
    builder.addCase(fetchGamePreviewArticles.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default gamesPreviewArticlesSlice.reducer;
export const { clearPreviewArticlesAction } = gamesPreviewArticlesSlice.actions;
