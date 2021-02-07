import React from 'react';
import { useSelector } from 'react-redux';
import {
  getGameLeadersAssists,
  getGameLeadersPoints,
  getGameLeadersRebounds,
} from 'common/selectors/GameStats/getBoxScore';
import VerticalLine from 'common/components/VerticalLine';
import ReusableTable from 'common/components/ReusableTable';
import Column from 'common/components/ReusableTable/Column';
import { useStyles } from './styles';

const GameLeaders = () => {
  const classes = useStyles();

  const gamePoints = useSelector(getGameLeadersPoints);
  const gameAssists = useSelector(getGameLeadersAssists);
  const gameRebounds = useSelector(getGameLeadersRebounds);

  const columnPoints = [
    {
      id: 1,
      component: Column,
      name: 'triCode',
      label: '',
      styles: {
        position: 'relative',
        minWidth: 50,
        boxShadow: 'none',
        backgroundColor: 'transparent',
      },
    },
    {
      id: 2,
      component: Column,
      name: 'fullName',
      label: '',
      styles: {
        backgroundColor: 'transparent',
        whiteSpace: 'nowrap',
        textAlign: 'left',
      },
    },
    {
      id: 3,
      component: Column,
      name: 'value',
      label: 'PTS',
      styles: {
        backgroundColor: 'transparent',
      },
    },
  ];

  const columnAssists = [
    {
      id: 1,
      component: Column,
      name: 'fullName',
      label: '',
      styles: {
        position: 'relative',
        boxShadow: 'none',
        backgroundColor: 'transparent',
      },
    },
    {
      id: 2,
      component: Column,
      name: 'value',
      label: 'AST',
      styles: {
        backgroundColor: 'transparent',
      },
    },
  ];

  const columnRebounds = [
    {
      id: 1,
      component: Column,
      name: 'fullName',
      label: '',
      styles: {
        position: 'relative',
        boxShadow: 'none',
        backgroundColor: 'transparent',
      },
    },
    {
      id: 2,
      component: Column,
      name: 'value',
      label: 'REB',
      styles: {
        backgroundColor: 'transparent',
      },
    },
  ];

  return (
    <div className={classes.root}>
      <ReusableTable data={gamePoints} columns={columnPoints} />
      <VerticalLine />
      <ReusableTable data={gameAssists} columns={columnAssists} />
      <VerticalLine />
      <ReusableTable data={gameRebounds} columns={columnRebounds} />
    </div>
  );
};

export default GameLeaders;
