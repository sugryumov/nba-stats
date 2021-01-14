import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { parseDateFromYMD } from 'helpers/parse';
import { fetchGamesListAction } from './store/actions';
import GamesHeader from './components/GamesHeader';
import GamesList from './components/GamesList';

function GamesListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesListAction.request(parseDateFromYMD()));
  }, [dispatch]);

  return (
    <>
      <GamesHeader />
      <GamesList />
    </>
  );
}

export default GamesListContainer;
