import React from 'react';
import { useSelector } from 'react-redux';
import { getTotalGameStats } from 'common/selectors/GameStats/getBoxScore';
import ReusableTable from 'common/components/ReusableTable';
import Column from 'common/components/ReusableTable/Column';
import { useStyles } from './styles';

const TotalStats = () => {
  const classes = useStyles();

  const totalGameStats = useSelector(getTotalGameStats);

  const columns = [
    {
      id: 1,
      component: Column,
      name: 'team',
      label: '',
      styles: {
        minWidth: 50,
      },
    },
    {
      id: 2,
      component: Column,
      name: 'fgm',
      label: 'FGM',
    },
    {
      id: 3,
      component: Column,
      name: 'fga',
      label: 'FGA',
    },
    {
      id: 4,
      component: Column,
      name: 'fgp',
      label: 'FG%',
    },
    {
      id: 5,
      component: Column,
      name: 'tpm',
      label: 'TPM',
    },
    {
      id: 6,
      component: Column,
      name: 'tpa',
      label: 'TPA',
    },
    {
      id: 7,
      component: Column,
      name: 'tpp',
      label: 'TP%',
    },
    {
      id: 8,
      component: Column,
      name: 'ftm',
      label: 'FTM',
    },
    {
      id: 9,
      component: Column,
      name: 'fta',
      label: 'FTA',
    },
    {
      id: 10,
      component: Column,
      name: 'ftp',
      label: 'FTP%',
    },
    {
      id: 11,
      component: Column,
      name: 'offReb',
      label: 'OREB',
    },
    {
      id: 12,
      component: Column,
      name: 'defReb',
      label: 'DREB',
    },
    {
      id: 13,
      component: Column,
      name: 'totReb',
      label: 'REB',
    },
    {
      id: 14,
      component: Column,
      name: 'assists',
      label: 'AST',
    },
    {
      id: 15,
      component: Column,
      name: 'steals',
      label: 'STL',
    },
    {
      id: 16,
      component: Column,
      name: 'blocks',
      label: 'BLK',
    },
    {
      id: 17,
      component: Column,
      name: 'turnovers',
      label: 'TO',
    },
    {
      id: 18,
      component: Column,
      name: 'pFouls',
      label: 'PF',
    },
    {
      id: 19,
      component: Column,
      name: 'points',
      label: 'PTS',
    },
    {
      id: 20,
      component: Column,
      name: 'plusMinus',
      label: '+/-',
    },
  ];

  return (
    <div className={classes.root}>
      <ReusableTable data={totalGameStats} columns={columns} />
    </div>
  );
};

export default TotalStats;
