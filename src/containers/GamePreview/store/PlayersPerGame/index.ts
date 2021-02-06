import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import network from 'network/dataNba';
import { TGetDataRequest } from 'interfaces';
import { TPlayersPerGameResponse, TPlayersPerGameState } from './types';

export const fetchPlayersPerGame = createAsyncThunk(
  'gamePreview/fetchPlayersPerGame',
  async (data: TGetDataRequest) =>
    ((await network.getPlayersPerGame(
      data,
    )) as unknown) as TPlayersPerGameResponse,
);

const initialState = {
  response: {
    sports_content: {
      game: {
        date: '',
        gameId: '',
        home: null,
        visitor: null,
      },
    },
  },
  error: null,
  loading: false,
} as TPlayersPerGameState;

const playersPerGameSlice = createSlice({
  name: 'playersPerGame',
  initialState,
  reducers: {
    clearPlayersPerGameAction(state) {
      state.response = {
        sports_content: {
          game: {
            date: '',
            gameId: '',
            home: null,
            visitor: null,
          },
        },
      };
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchPlayersPerGame.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPlayersPerGame.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.response = payload;
    });
    builder.addCase(fetchPlayersPerGame.rejected, (state, action) => {
      state.loading = false;
      state.error = JSON.stringify(
        action.error,
        Object.getOwnPropertyNames(action.error),
      );
    });
  },
});

export default playersPerGameSlice.reducer;
export const { clearPlayersPerGameAction } = playersPerGameSlice.actions;
