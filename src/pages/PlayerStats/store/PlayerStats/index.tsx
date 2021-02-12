import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network';
import {
  TPlayerStatsRequest,
  TPlayerStatsResponse,
  TPlayerStatsState,
} from './types';

export const fetchPlayerStats = createAsyncThunk(
  'playerStatistics/fetchPlayerStats',
  async (data: TPlayerStatsRequest) =>
    ((await network.playerStats(data)) as unknown) as TPlayerStatsResponse,
);

const initialState = {
  response: {
    data: [],
    meta: {
      current_page: 1,
      next_page: null,
      per_page: null,
      total_count: null,
      total_pages: null,
    },
  },
  error: null,
  loading: false,
} as TPlayerStatsState;

const playerStatsSlice = createSlice({
  name: 'playerStats',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchPlayerStats.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPlayerStats.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchPlayerStats.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default playerStatsSlice.reducer;
