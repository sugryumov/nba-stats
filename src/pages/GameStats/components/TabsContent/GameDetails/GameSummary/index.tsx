import React from 'react';
import VerticalLine from 'common/components/VerticalLine';
import LineScore from './LineScore';
import LineScoreStats from './LineScoreStats';
import { useStyles } from './styles';

const GameSummary = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LineScore />
      <VerticalLine />
      <LineScoreStats />
    </div>
  );
};

export default GameSummary;
