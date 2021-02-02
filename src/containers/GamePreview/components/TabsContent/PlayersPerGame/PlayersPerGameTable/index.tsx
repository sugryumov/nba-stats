import React from 'react';
import { TableContainer, Paper, Toolbar, Typography } from '@material-ui/core';
import ReusableTable from 'common/components/ReusableTable';
import Column from 'common/components/ReusableTable/Column';
import { useStyles } from './styles';

const PlayersPerGameTable = ({ team, roster }) => {
  const classes = useStyles();

  const columns = [
    {
      id: 1,
      component: Column,
      name: 'last_name',
      label: 'PLAYER',
    },
    {
      id: 2,
      component: Column,
      name: 'games',
      label: 'GP',
    },
    {
      id: 3,
      component: Column,
      name: 'field_goal_pct',
      label: 'FG%',
    },
    {
      id: 4,
      component: Column,
      name: 'three_point_pct',
      label: 'TP%',
    },
    {
      id: 5,
      component: Column,
      name: 'free_throw_pct',
      label: 'FTP%',
    },
    {
      id: 6,
      component: Column,
      name: 'rebounds_pg',
      label: 'REB',
    },
    {
      id: 7,
      component: Column,
      name: 'assists_pg',
      label: 'AST',
    },
    {
      id: 8,
      component: Column,
      name: 'steals_pg',
      label: 'STL',
    },
    {
      id: 9,
      component: Column,
      name: 'points_pg',
      label: 'PTS',
    },
  ];

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          {team}
        </Typography>
      </Toolbar>

      <div className={classes.table}>
        <ReusableTable data={roster} columns={columns} />
      </div>
    </TableContainer>
  );
};

export default PlayersPerGameTable;
