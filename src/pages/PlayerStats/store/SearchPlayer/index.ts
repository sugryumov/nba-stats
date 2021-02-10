import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network';
import {
  TSearchPlayerRequest,
  TSearchPlayerResponse,
  TSearchPlayerState,
} from './types';

export const fetchSearchPlayer = createAsyncThunk(
  'playerStatistics/fetchSearchPlayer',
  async (data: TSearchPlayerRequest) =>
    ((await network.searchPlayers(data)) as unknown) as TSearchPlayerResponse,
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
  selectedPlayer: [],
} as TSearchPlayerState;

const searchPlayerSlice = createSlice({
  name: 'searchPlayer',
  initialState,
  reducers: {
    selectedPlayerAction(state, { payload }) {
      state.selectedPlayer = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchSearchPlayer.pending, state => {
      state.loading = true;
      state.response = {
        data: [],
        meta: {
          current_page: 1,
          next_page: null,
          per_page: null,
          total_count: null,
          total_pages: null,
        },
      };
    });
    builder.addCase(fetchSearchPlayer.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchSearchPlayer.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default searchPlayerSlice.reducer;
export const { selectedPlayerAction } = searchPlayerSlice.actions;
