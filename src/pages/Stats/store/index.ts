import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network/statsNba';
import { TStatsResponse, TStatsGroupBy, TStatsState } from './types';

export const fetchStats = createAsyncThunk(
  'stats/fetchStats',
  async (data: TStatsGroupBy) =>
    ((await network.getStats(data)) as unknown) as TStatsResponse,
);

const initialState = {
  response: {
    title: '',
    items: [],
    last_updated: '',
  },
  error: null,
  loading: false,
  groupBy: 'home_daily',
} as TStatsState;

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    statsGroupByAction(state, { payload }) {
      state.groupBy = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchStats.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchStats.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchStats.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default statsSlice.reducer;
export const { statsGroupByAction } = statsSlice.actions;
