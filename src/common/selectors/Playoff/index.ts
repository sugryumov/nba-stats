import { createSelector } from '@reduxjs/toolkit';
import { TState } from 'store/types';

export const getPlayoffBracket = (state: TState) => state.playoff;

export const getPlayoffBracketData = createSelector(
  getPlayoffBracket,
  ({
    response: {
      bracket: { playoffBracketSeries },
    },
  }) => playoffBracketSeries,
);

export const getPlayoffBracketLoading = createSelector(
  getPlayoffBracket,
  ({ loading }) => loading,
);

export const getPlayoffBracketError = createSelector(
  getPlayoffBracket,
  ({ error }) => error,
);
