import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Column from 'common/components/ReusableTable/Column';
import ReusableTable from 'common/components/ReusableTable';
import { useStyles } from './styles';

const BoxScoreTable = ({ data, team }) => {
  const classes = useStyles();

  const ColumnName = ({ _, render }) => {
    const [firstName, lastName, pos] = render;

    return (
      <>
        <b>{`${firstName} ${lastName}`}</b> {pos && `| ${pos}`}
      </>
    );
  };

  const ColumnMinAndDnp = ({ value, render }) => {
    return <span>{render.join(' ') !== '' ? render.join(' ') : value}</span>;
  };

  const columns = [
    {
      id: 1,
      component: ColumnName,
      name: '',
      render: ['firstName', 'lastName', 'pos'],
      label: 'PLAYER',
    },
    {
      id: 2,
      component: ColumnMinAndDnp,
      name: 'min',
      render: ['dnp'],
      label: 'MIN',
      colSpan: {
        count: 20,
        columnName: 'dnp',
      },
    },
    {
      id: 3,
      component: Column,
      name: 'fgm',
      label: 'FGM',
    },
    {
      id: 4,
      component: Column,
      name: 'fga',
      label: 'FGA',
    },
    {
      id: 5,
      component: Column,
      name: 'fgp',
      label: 'FG%',
    },
    {
      id: 6,
      component: Column,
      name: 'tpm',
      label: 'TPM',
    },
    {
      id: 7,
      component: Column,
      name: 'tpa',
      label: 'TPA',
    },
    {
      id: 8,
      component: Column,
      name: 'tpp',
      label: 'TP%',
    },
    {
      id: 9,
      component: Column,
      name: 'ftm',
      label: 'FTM',
    },
    {
      id: 10,
      component: Column,
      name: 'fta',
      label: 'FTA',
    },
    {
      id: 11,
      component: Column,
      name: 'ftp',
      label: 'FTP%',
    },
    {
      id: 12,
      component: Column,
      name: 'offReb',
      label: 'OREB',
    },

    {
      id: 13,
      component: Column,
      name: 'defReb',
      label: 'DREB',
    },
    {
      id: 14,
      component: Column,
      name: 'totReb',
      label: 'REB',
    },
    {
      id: 15,
      component: Column,
      name: 'assists',
      label: 'AST',
    },

    {
      id: 16,
      component: Column,
      name: 'steals',
      label: 'STL',
    },
    {
      id: 17,
      component: Column,
      name: 'blocks',
      label: 'BLK',
    },
    {
      id: 18,
      component: Column,
      name: 'turnovers',
      label: 'TO',
    },
    {
      id: 19,
      component: Column,
      name: 'pFouls',
      label: 'PF',
    },
    {
      id: 20,
      component: Column,
      name: 'points',
      label: 'PTS',
    },
    {
      id: 21,
      component: Column,
      name: 'plusMinus',
      label: '+/-',
    },
  ];

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          {team}
        </Typography>
      </Toolbar>

      <div className={classes.table}>
        <ReusableTable data={data} columns={columns} />
      </div>
    </TableContainer>
  );
};

export default BoxScoreTable;
