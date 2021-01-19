import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles((theme: ITheme) => ({
  tableHead: {
    'backgroundColor': theme.palette.secondaryColor,

    '& .MuiTableCell-head': {
      'padding': 10,
      'fontWeight': 400,

      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },

      '&:first-child': {
        paddingLeft: 16,
      },

      '&:last-child': {
        paddingRight: 16,
      },
    },
  },
  tableCellTeam: {
    minWidth: 220,

    [theme.breakpoints.down('xs')]: {
      position: 'sticky',
      left: 0,
      zIndex: 1,
      minWidth: 94,
      backgroundColor: theme.palette.secondaryColor,
      boxShadow: '3px 0 3px -2px rgba(0,0,0,.1)',
    },
  },
  tableCellLastTen: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  tableCellStreak: {
    width: 50,
    textAlign: 'right',
  },
}));

const StandingsTableHead = () => {
  const classes = useStyles();

  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        <TableCell className={classes.tableCellTeam}>TEAM</TableCell>
        <TableCell align="center">W</TableCell>
        <TableCell align="center">L</TableCell>
        <TableCell align="center">WIN%</TableCell>
        <TableCell align="center">GB</TableCell>
        <TableCell align="center">CONF</TableCell>
        <TableCell align="center">HOME</TableCell>
        <TableCell align="center">ROAD</TableCell>
        <TableCell className={classes.tableCellLastTen}>LAST 10</TableCell>
        <TableCell className={classes.tableCellStreak}>STREAK</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default StandingsTableHead;
