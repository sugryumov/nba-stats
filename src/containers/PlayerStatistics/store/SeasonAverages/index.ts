import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network';
import {
  TSeasonAveragesRequest,
  TSeasonAveragesResponse,
  TSeasonAveragesState,
} from './types';

export const fetchSeasonAverages = createAsyncThunk(
  'playerStatistics/fetchSeasonAverages',
  async (data: TSeasonAveragesRequest) =>
    ((await network.seasonAverages(data)) as unknown) as {
      data: TSeasonAveragesResponse[];
    },
);

const initialState = {
  response: { data: [] },
  error: null,
  loading: false,
} as TSeasonAveragesState;

const seasonAveragesSlice = createSlice({
  name: 'seasonAverages',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchSeasonAverages.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchSeasonAverages.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchSeasonAverages.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default seasonAveragesSlice.reducer;
