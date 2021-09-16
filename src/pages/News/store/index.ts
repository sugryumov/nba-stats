import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network/statsNba';
import { TNewsState, TNewsResponse } from './types';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (params: any) =>
    ((await network.getNews(params)) as unknown) as TNewsResponse,
);

const initialState = {
  response: {
    ListItems: [],
  },
  error: null,
  loading: false,
} as TNewsState;

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default newsSlice.reducer;
