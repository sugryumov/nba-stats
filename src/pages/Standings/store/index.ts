import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network/dataNba';
import {
  TStandingsGroupBy,
  TStandingsResponse,
  TStandingsState,
} from './types';

export const fetchStandings = createAsyncThunk(
  'standings/fetchStandings',
  async (data: TStandingsGroupBy) =>
    ((await network.getStandings(data)) as unknown) as TStandingsResponse,
);

const initialState = {
  response: {
    league: {
      standard: {
        conference: {
          east: [],
          west: [],
        },
        seasonStageId: null,
        seasonYear: null,
      },
    },
  },
  error: null,
  loading: false,
  groupBy: 'standings_conference',
} as TStandingsState;

const standingsSlice = createSlice({
  name: 'standings',
  initialState,
  reducers: {
    standingsGroupByAction(state, { payload }) {
      state.groupBy = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchStandings.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchStandings.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchStandings.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default standingsSlice.reducer;
export const { standingsGroupByAction } = standingsSlice.actions;
