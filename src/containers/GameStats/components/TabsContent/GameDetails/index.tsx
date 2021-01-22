import { getTeamStats } from 'common/selectors/GameStats/getBoxScore';
import React from 'react';
import { useSelector } from 'react-redux';

const GameDetails = () => {
  const gameDetails = useSelector(getTeamStats);

  return <div>hello</div>;
};

export default GameDetails;
