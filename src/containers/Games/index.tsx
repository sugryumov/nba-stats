import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChangedDate } from 'common/selectors/Games';
import GamesHeader from 'containers/Games/components/GamesHeader';
import GamesList from 'containers/Games/components/GamesList';
import { fetchGames } from './store';

function GameListContainer() {
  const dispatch = useDispatch();

  const changedDate = useSelector(getChangedDate);

  useEffect(() => {
    dispatch(fetchGames(changedDate));
  }, [dispatch, changedDate]);

  return (
    <>
      <GamesHeader />
      <GamesList />
    </>
  );
}

export default GameListContainer;
