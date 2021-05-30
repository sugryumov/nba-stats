import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayoffBracket } from './store';
import { getPlayoffBracketData } from 'common/selectors/Playoff';

const PlayoffContainer = () => {
  const dispatch = useDispatch();

  const playoffBracketData = useSelector(getPlayoffBracketData);

  useEffect(() => {
    dispatch(fetchPlayoffBracket());
  }, [dispatch]);

  console.log(`playoffBracketData`, playoffBracketData);

  return <div>Playoff Brackett</div>;
};

export default PlayoffContainer;
