import React from 'react';
import { useSelector } from 'react-redux';
import { getLineScoreStats } from 'common/selectors/GameStats';
import ReusableTable from 'common/components/ReusableTable';
import Column from 'common/components/ReusableTable/Column';
import { useStyles } from './styles';

const LineScoreStats = () => {
  const classes = useStyles();

  const lineScoreStats = useSelector(getLineScoreStats);

  const columns = [
    {
      id: 1,
      component: Column,
      name: 'pointsInPaint',
      label: 'PITP',
      styles: {
        minWidth: 'auto',
        position: 'relative',
        boxShadow: 'none',
        backgroundColor: 'transparent',
      },
      tooltip: 'Points in paint',
    },
    {
      id: 2,
      component: Column,
      name: 'fastBreakPoints',
      label: 'FB PTS',
      tooltip: 'Fast break points',
      styles: {
        backgroundColor: 'transparent',
      },
    },
    {
      id: 3,
      component: Column,
      name: 'biggestLead',
      label: 'BIG LD',
      tooltip: 'Biggest lead',
      styles: {
        backgroundColor: 'transparent',
      },
    },
    {
      id: 4,
      component: Column,
      name: 'pointsOffTurnovers',
      label: 'PTS OFF TO',
      tooltip: 'Points off turnovers',
      styles: {
        backgroundColor: 'transparent',
      },
    },
    {
      id: 5,
      component: Column,
      name: 'secondChancePoints',
      label: 'SEC CH PTS',
      tooltip: 'Second chance points',
      styles: {
        backgroundColor: 'transparent',
      },
    },
    {
      id: 6,
      component: Column,
      name: 'longestRun',
      label: 'LG RUN',
      tooltip: 'Longest run',
      styles: {
        backgroundColor: 'transparent',
      },
    },
  ];

  return (
    <div className={classes.root}>
      <ReusableTable data={lineScoreStats} columns={columns} />
    </div>
  );
};

export default LineScoreStats;
