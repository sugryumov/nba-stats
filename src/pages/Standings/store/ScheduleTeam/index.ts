import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network/dataNba';
import { TScheduleTeamResponse, TScheduleTeamState } from './types';

export const fetchScheduleTeam = createAsyncThunk(
  'standings/fetchScheduleTeam',
  async (data: string) =>
    ((await network.getScheduleTeam(data)) as unknown) as TScheduleTeamResponse,
);

const initialState = {
  response: {
    league: {
      standard: {
        conference: [],
      },
    },
  },
  error: null,
  loading: false,
} as TScheduleTeamState;

const scheduleTeamSlice = createSlice({
  name: 'scheduleTeam',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchScheduleTeam.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchScheduleTeam.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchScheduleTeam.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default scheduleTeamSlice.reducer;
