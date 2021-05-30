import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network/statsNba';
import { TPlayoffState, TPlayoffResponse } from './types';

export const fetchPlayoffBracket = createAsyncThunk(
  'gameStats/fetchGameStats',
  async () =>
    ((await network.getPlayoffBracket()) as unknown) as TPlayoffResponse,
);

const initialState = {
  response: {
    bracket: {
      playoffBracketSeries: [],
    },
  },
  error: null,
  loading: false,
} as TPlayoffState;

const playoffBracketSlice = createSlice({
  name: 'playoffBracket',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchPlayoffBracket.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPlayoffBracket.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchPlayoffBracket.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default playoffBracketSlice.reducer;
