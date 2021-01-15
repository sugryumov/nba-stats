import { combineReducers } from 'redux';
import { fetchGamesListReducer } from 'containers/Games/store/reducer';
import { statisticsReducer } from 'containers/PlayerStatistics/store/reducers';
import { standingsReducer } from 'containers/Standings/store/reducers';

const reducers = {
  gamesList: fetchGamesListReducer,
  statistics: statisticsReducer,
  standings: standingsReducer,
};

export const reducer = combineReducers(reducers);
