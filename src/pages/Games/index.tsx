import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChangedDate, getGamesListData } from 'common/selectors/Games';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import { GAME_STATUS } from 'common/constants/gameStatus';
import { fetchGames } from 'pages/Games/store';
import GamesHeader from 'pages/Games/components/GamesHeader';
import GamesList from 'pages/Games/components/GamesList';
import { useStyles } from './styles';

function GamesListContainer() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const changedDate = useSelector(getChangedDate);
  const gamesList = useSelector(getGamesListData);

  const hasLiveGame = gamesList.filter(el => GAME_STATUS.live === el.statusNum);

  useEffect(() => {
    dispatch(fetchGames(changedDate));
  }, [dispatch, changedDate]);

  const refreshGameList = () => {
    dispatch(fetchGames(changedDate));
  };

  return (
    <div className={classes.root}>
      <GamesHeader />
      <GamesList />

      {hasLiveGame.length !== 0 && (
        <IconButton
          className={classes.button}
          onClick={refreshGameList}
          aria-label="refresh"
        >
          <RefreshIcon />
        </IconButton>
      )}
    </div>
  );
}

export default GamesListContainer;
