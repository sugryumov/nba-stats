import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network/dataNba';
import {
  TStandingsGroupBy,
  TStandingsResponse,
  TStandingsTeamState,
} from './types';

export const fetchStandingsTeam = createAsyncThunk(
  'standings/fetchStandingsTeam',
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
} as TStandingsTeamState;

const standingsTeamSlice = createSlice({
  name: 'standingsTeam',
  initialState,
  reducers: {
    standingsGroupByAction(state, { payload }) {
      state.groupBy = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchStandingsTeam.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchStandingsTeam.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchStandingsTeam.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default standingsTeamSlice.reducer;
export const { standingsGroupByAction } = standingsTeamSlice.actions;
