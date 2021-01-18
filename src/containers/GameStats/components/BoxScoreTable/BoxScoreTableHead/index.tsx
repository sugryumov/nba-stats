import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) => ({
  tableHead: {
    'backgroundColor': theme.palette.secondaryColor,

    '& .MuiTableCell-head': {
      'padding': 10,
      'fontWeight': 400,

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
    width: 20,
    textAlign: 'right',
  },
}));

const BoxScoreTableHead = () => {
  const classes = useStyles();

  return (
    <TableHead className={classes.tableHead}>
      <TableRow>
        <TableCell className={classes.tableCellTeam}>PLAYER</TableCell>
        <TableCell align="center">MIN</TableCell>
        <TableCell align="center">FGM </TableCell>
        <TableCell align="center">FGA</TableCell>
        <TableCell align="center">FG%</TableCell>
        <TableCell align="center">3PM</TableCell>
        <TableCell align="center">3PA</TableCell>
        <TableCell align="center">3P%</TableCell>
        <TableCell align="center">FTM</TableCell>
        <TableCell align="center">FTA</TableCell>
        <TableCell align="center">FT%</TableCell>
        <TableCell align="center">OREB</TableCell>
        <TableCell align="center">DREB</TableCell>
        <TableCell align="center">REB</TableCell>
        <TableCell align="center">AST</TableCell>
        <TableCell align="center">STL</TableCell>
        <TableCell align="center">BLK</TableCell>
        <TableCell align="center">TO</TableCell>
        <TableCell align="center">PF</TableCell>
        <TableCell align="center">PTS</TableCell>
        <TableCell className={classes.tableCellStreak}>+/-</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default BoxScoreTableHead;
