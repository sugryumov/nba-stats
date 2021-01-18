import { combineReducers } from 'redux';
import { getGamesListReducer } from 'containers/Games/store/reducer';
import { statisticsReducer } from 'containers/PlayerStatistics/store/reducers';
import { standingsReducer } from 'containers/Standings/store/reducers';
import { gameStatsReducer } from 'containers/GameStats/store/reducers';

const reducers = {
  gamesList: getGamesListReducer,
  statistics: statisticsReducer,
  standings: standingsReducer,
  gameStats: gameStatsReducer,
};

export const reducer = combineReducers(reducers);
