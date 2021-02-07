import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChangedDate } from 'common/selectors/Games/gamesList';
import { getGamesListAction } from './store/actions';
import GamesHeader from './components/GamesHeader';
import GamesList from './components/GamesList';

function GamesListContainer() {
  const dispatch = useDispatch();

  const changedDate = useSelector(getChangedDate);

  useEffect(() => {
    dispatch(getGamesListAction.request(changedDate));
  }, [dispatch, changedDate]);

  return (
    <>
      <GamesHeader />
      <GamesList />
    </>
  );
}

export default GamesListContainer;
