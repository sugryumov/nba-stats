import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { parseDateFromYMD } from 'helpers/parse';
import network from 'network/dataNba';
import { TGamesResponse, TGamesState } from 'containers/Games/store/types';

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (data: string) =>
    ((await network.getGames(data)) as unknown) as TGamesResponse,
);

const initialState = {
  response: {
    games: [],
  },
  error: null,
  loading: false,
  showScore: false,
  changedDate: parseDateFromYMD(),
} as TGamesState;

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    changedGameDate(state, { payload }) {
      state.changedDate = payload;
    },

    showScoreGame(state, { payload }) {
      state.showScore = payload;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchGames.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchGames.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default gamesSlice.reducer;
export const { changedGameDate, showScoreGame } = gamesSlice.actions;
