import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network/dataNba';
import { TGetDataRequest } from 'interfaces';
import { TGameStatsState, TGameStatsResponse } from './types';

export const fetchGameStats = createAsyncThunk(
  'gameStats/fetchGameStats',
  async (data: TGetDataRequest) =>
    ((await network.getBoxScore(data)) as unknown) as TGameStatsResponse,
);

const initialState = {
  response: {
    basicGameData: {},
    stats: {
      activePlayers: [],
      hTeam: null,
      vTeam: null,
      leadChanges: '',
      timesTied: '',
    },
  },
  error: null,
  loading: false,
  activeTab: 'box-score',
} as TGameStatsState;

const gameStatsSlice = createSlice({
  name: 'gameStats',
  initialState,
  reducers: {
    changedActiveTab(state, { payload }) {
      state.activeTab = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchGameStats.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchGameStats.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchGameStats.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default gameStatsSlice.reducer;
export const { changedActiveTab } = gameStatsSlice.actions;
