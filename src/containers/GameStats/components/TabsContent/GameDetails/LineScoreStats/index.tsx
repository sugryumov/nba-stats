import React from 'react';
import { useSelector } from 'react-redux';
import { getLineScoreStats } from 'common/selectors/GameStats/getBoxScore';
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
      },
    },
    {
      id: 2,
      component: Column,
      name: 'fastBreakPoints',
      label: 'FB PTS',
    },
    {
      id: 3,
      component: Column,
      name: 'biggestLead',
      label: 'BIG LD',
    },
    {
      id: 4,
      component: Column,
      name: 'pointsOffTurnovers',
      label: 'PTS OFF TO',
    },
    {
      id: 5,
      component: Column,
      name: 'secondChancePoints',
      label: 'SEC CH PTS',
    },
    {
      id: 6,
      component: Column,
      name: 'longestRun',
      label: 'LG RUN',
    },
  ];

  return (
    <div className={classes.root}>
      <ReusableTable data={lineScoreStats} columns={columns} />
    </div>
  );
};

export default LineScoreStats;
