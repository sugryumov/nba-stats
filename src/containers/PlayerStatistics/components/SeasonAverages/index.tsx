import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSeasonAveragesData } from 'common/selectors/Statistics/seasonAverages';
import SeasonAveragesItem from './SeasonAveragesItem';
import './index.css';

const SeasonAverages = ({ changedPlayers }) => {
  const [playerFullInfo, setPlayerFullInfo] = useState<any>(null);

  const seasonAveragesData = useSelector(getSeasonAveragesData);

  useEffect(() => {
    const concatPlayerInfo = changedPlayers?.reduce((acc, currentPlayer) => {
      const findSeasonAverages = seasonAveragesData
        .filter(({ player_id }) => player_id === currentPlayer.id)
        .map(el => (el ? { ...el, ...currentPlayer } : currentPlayer))
        .find(Boolean);

      return findSeasonAverages
        ? [...acc, findSeasonAverages]
        : [...acc, currentPlayer];
    }, []);

    setPlayerFullInfo(concatPlayerInfo);
  }, [seasonAveragesData, changedPlayers]);

  return (
    <div className="season-averages">
      <h1 className="season-averages__title">'20 - '21 SEASON AVERAGES</h1>

      <SeasonAveragesItem playerFullInfo={playerFullInfo} />
    </div>
  );
};

export default SeasonAverages;
