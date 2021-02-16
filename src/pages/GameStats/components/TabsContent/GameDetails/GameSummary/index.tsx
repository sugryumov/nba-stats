import React from 'react';
import VerticalLine from 'common/components/VerticalLine';
import LineScore from 'pages/GameStats/components/TabsContent/GameDetails/GameSummary/LineScore';
import LineScoreStats from 'pages/GameStats/components/TabsContent/GameDetails/GameSummary/LineScoreStats';
import LineExtraStats from 'pages/GameStats/components/TabsContent/GameDetails/GameSummary/LineExtraStats';
import { useStyles } from './styles';

const GameSummary = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LineScore />
      <VerticalLine />
      <LineScoreStats />
      <LineExtraStats />
    </div>
  );
};

export default GameSummary;
