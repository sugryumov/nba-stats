import { combineReducers } from 'redux';
import { getGamesListReducer } from 'containers/Games/store/reducer';
import { statisticsReducer } from 'containers/PlayerStatistics/store/reducers';
import { standingsReducer } from 'containers/Standings/store/reducers';
import { gameStatsReducer } from 'containers/GameStats/store/reducers';
import { gamePreviewReducer } from 'containers/GamePreview/store/reducers';
import { statsReducer } from 'containers/Stats/store/reducers';

const reducer = combineReducers({
  gamesList: getGamesListReducer,
  statistics: statisticsReducer,
  standings: standingsReducer,
  gameStats: gameStatsReducer,
  gamePreview: gamePreviewReducer,
  stats: statsReducer,
});

export default reducer;
