import React from 'react';
import { useSelector } from 'react-redux';
import { getLineScore } from 'common/selectors/GameStats/getBoxScore';
import ReusableTable from 'common/components/ReusableTable';
import Column from 'common/components/ReusableTable/Column';
import { useStyles } from './styles';

const LineScore = () => {
  const classes = useStyles();

  const lineScore = useSelector(getLineScore);

  const columns = [
    {
      id: 1,
      component: Column,
      name: 'triCode',
      label: 'TEAM',
      width: 'auto',
    },
    {
      id: 2,
      component: Column,
      name: 'Q1score',
      label: 'Q1',
    },
    {
      id: 3,
      component: Column,
      name: 'Q2score',
      label: 'Q2',
    },
    {
      id: 4,
      component: Column,
      name: 'Q3score',
      label: 'Q3',
    },
    {
      id: 5,
      component: Column,
      name: 'Q4score',
      label: 'Q4',
    },
    {
      id: 6,
      component: Column,
      name: 'score',
      label: 'FINAL',
    },
  ];

  return (
    <div className={classes.root}>
      <ReusableTable data={lineScore} columns={columns} />
    </div>
  );
};

export default LineScore;
