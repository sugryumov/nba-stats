import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getSeasonAveragesData,
  getSeasonAveragesLoading,
} from 'common/selectors/Statistics/seasonAverages';
import Spinner from 'common/components/Spinner';
import StatsPlayerItem from './StatsPlayerItem';
import { useStyles } from './styles';

const StatsPlayer = ({ selectedPlayers }) => {
  const classes = useStyles();

  const [playerFullInfo, setPlayerFullInfo] = useState<any>(null);

  const seasonAveragesData = useSelector(getSeasonAveragesData);
  const seasonAveragesLoading = useSelector(getSeasonAveragesLoading);

  useEffect(() => {
    const concatPlayerInfo = selectedPlayers?.reduce((acc, currentPlayer) => {
      const findSeasonAverages = seasonAveragesData
        .filter(({ player_id }) => player_id === currentPlayer.id)
        .map(el => (el ? { ...el, ...currentPlayer } : currentPlayer))
        .find(Boolean);

      return findSeasonAverages
        ? [...acc, findSeasonAverages]
        : [...acc, currentPlayer];
    }, []);

    setPlayerFullInfo(concatPlayerInfo);
  }, [seasonAveragesData, selectedPlayers]);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>'20 - '21 SEASON AVERAGES</h1>

      {seasonAveragesLoading ? (
        <Spinner />
      ) : (
        <StatsPlayerItem playerFullInfo={playerFullInfo} />
      )}
    </div>
  );
};

export default StatsPlayer;
