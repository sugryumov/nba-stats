import { combineReducers } from 'redux';
import { fetchGamesListReducer } from 'containers/Games/store/reducer';
import { statisticsReducer } from 'containers/PlayerStatistics/store/reducers';

const reducers = {
  gamesList: fetchGamesListReducer,
  statistics: statisticsReducer,
};

export const reducer = combineReducers(reducers);
