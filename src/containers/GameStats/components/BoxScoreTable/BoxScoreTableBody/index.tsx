import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import { ITheme } from 'interfaces/theme';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { TActivePlayers } from 'containers/GameStats/store/BoxScore/entities';

const useStyles = makeStyles((theme: ITheme) => ({
  tableRow: {
    '& .MuiTableCell-root': {
      'padding': 10,

      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },

      '&:first-child': {
        paddingLeft: 16,
        paddingRight: 16,
        whiteSpace: 'nowrap',
      },
      '&:last-child': {
        paddingRight: 16,
      },
    },
  },
  tableCellName: {
    minWidth: 220,
    color: `${theme.palette.text.primary} !important`,

    [theme.breakpoints.down('xs')]: {
      position: 'sticky',
      left: 0,
      zIndex: 1,
      minWidth: 'auto',
      backgroundColor: theme.palette.background?.paper,
      boxShadow: '3px 0 3px -2px rgba(0,0,0,.1)',
    },
  },
  total: {
    '& .MuiTableCell-body': {
      fontWeight: 600,
      color: theme.palette.primary.main,

      [theme.breakpoints.down('xs')]: {
        padding: '10px 16px',
        fontSize: 12,
      },
    },
  },
}));

const BoxScoreTableBody = ({ data }) => {
  const classes = useStyles();

  const sumStat = statName => {
    return data
      .map((_, idx, array) => array[idx][statName])
      .reduce((sum, i) => sum + Number(i), 0);
  };

  const countPlay = data.filter(
    player => player.min !== '0:00' && player.dnp === '',
  ).length;

  return (
    <TableBody>
      {data.map((player: TActivePlayers) => (
        <TableRow key={player.personId} hover className={classes.tableRow}>
          <TableCell className={classes.tableCellName}>
            <b>{`${player.firstName} ${player.lastName}`}</b>{' '}
            {player.pos && `| ${player.pos}`}
          </TableCell>
          {player.min === '0:00' || player.dnp ? (
            <TableCell colSpan={20} align="left">
              {player.dnp}
            </TableCell>
          ) : (
            <>
              <TableCell align="center">{player.min}</TableCell>
              <TableCell align="center">{player.fgm}</TableCell>
              <TableCell align="center">{player.fga}</TableCell>
              <TableCell align="center">{player.fgp}</TableCell>
              <TableCell align="center">{player.tpm}</TableCell>
              <TableCell align="center">{player.tpa}</TableCell>
              <TableCell align="center">{player.tpp}</TableCell>
              <TableCell align="center">{player.ftm}</TableCell>
              <TableCell align="center">{player.fta}</TableCell>
              <TableCell align="center">{player.ftp}</TableCell>
              <TableCell align="center">{player.offReb}</TableCell>
              <TableCell align="center">{player.defReb}</TableCell>
              <TableCell align="center">{player.totReb}</TableCell>
              <TableCell align="center">{player.assists}</TableCell>
              <TableCell align="center">{player.steals}</TableCell>
              <TableCell align="center">{player.blocks}</TableCell>
              <TableCell align="center">{player.turnovers}</TableCell>
              <TableCell align="center">{player.pFouls}</TableCell>
              <TableCell align="center">{player.points}</TableCell>
              <TableCell align="right">{player.plusMinus}</TableCell>
            </>
          )}
        </TableRow>
      ))}
      <TableRow className={classes.total}>
        <TableCell
          className={classes.tableCellName}
          style={{ fontWeight: 'normal' }}
        >
          Totals
        </TableCell>
        <TableCell align="center"></TableCell>
        <TableCell align="center">{sumStat('fgm')}</TableCell>
        <TableCell align="center">{sumStat('fga')}</TableCell>
        <TableCell align="center">
          {parseFloat(String(sumStat('fgp') / countPlay)).toFixed(1)}
        </TableCell>
        <TableCell align="center">{sumStat('tpm')}</TableCell>
        <TableCell align="center">{sumStat('tpa')}</TableCell>
        <TableCell align="center">
          {parseFloat(String(sumStat('tpp') / countPlay)).toFixed(1)}
        </TableCell>
        <TableCell align="center">{sumStat('ftm')}</TableCell>
        <TableCell align="center">{sumStat('fta')}</TableCell>
        <TableCell align="center">
          {parseFloat(String(sumStat('ftp') / countPlay)).toFixed(1)}
        </TableCell>
        <TableCell align="center">{sumStat('offReb')}</TableCell>
        <TableCell align="center">{sumStat('defReb')}</TableCell>
        <TableCell align="center">{sumStat('totReb')}</TableCell>
        <TableCell align="center">{sumStat('assists')}</TableCell>
        <TableCell align="center">{sumStat('steals')}</TableCell>
        <TableCell align="center">{sumStat('blocks')}</TableCell>
        <TableCell align="center">{sumStat('turnovers')}</TableCell>
        <TableCell align="center">{sumStat('pFouls')}</TableCell>
        <TableCell align="center">{sumStat('points')}</TableCell>
        <TableCell align="center"></TableCell>
      </TableRow>
    </TableBody>
  );
};

export default BoxScoreTableBody;
