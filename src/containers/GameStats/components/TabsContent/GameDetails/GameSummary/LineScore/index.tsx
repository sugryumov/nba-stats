import React from 'react';
import { useSelector } from 'react-redux';
import { getLineScore } from 'common/selectors/GameStats/getBoxScore';
import ReusableTable from 'common/components/ReusableTable';
import Column from 'common/components/ReusableTable/Column';
import { useStyles } from './styles';

const LineScore = () => {
  const classes = useStyles();

  const lineScore = useSelector(getLineScore);

  console.log('lineScore', lineScore)

  const columns = [
    {
      id: 1,
      component: Column,
      name: 'triCode',
      label: '',
      styles: {
        minWidth: 50,
        position: 'relative',
        boxShadow: 'none',
        backgroundColor: 'transparent',
      },
    },
    {
      id: 2,
      component: Column,
      name: 'Q1score',
      label: 'Q1',
      styles: {
        backgroundColor: 'transparent',
      },
    },
    {
      id: 3,
      component: Column,
      name: 'Q2score',
      label: 'Q2',
      styles: {
        backgroundColor: 'transparent',
      },
    },
    {
      id: 4,
      component: Column,
      name: 'Q3score',
      label: 'Q3',
      styles: {
        backgroundColor: 'transparent',
      },
    },
    {
      id: 5,
      component: Column,
      name: 'Q4score',
      label: 'Q4',
      styles: {
        backgroundColor: 'transparent',
      },
    },
    {
      id: 6,
      component: Column,
      name: 'score',
      label: 'FINAL',
      styles: {
        backgroundColor: 'transparent',
      },
    },
  ];

  return (
    <div className={classes.root}>
      <ReusableTable data={lineScore} columns={columns} />
    </div>
  );
};

export default LineScore;
