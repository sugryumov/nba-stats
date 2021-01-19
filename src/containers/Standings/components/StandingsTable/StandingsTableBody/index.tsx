import React from 'react';
import { useSelector } from 'react-redux';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';
import SVGIcon from 'common/components/SVGIcon';
import { getStandingsGroupBy } from 'common/selectors/Standings/getStandings';
import { TTeamStandings } from 'containers/Standings/store/entities';

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
      },

      '&:last-child': {
        paddingRight: 16,
      },
    },

    '&:nth-child(8)': {
      '& .MuiTableCell-root': {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
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
      backgroundColor: theme.palette.background?.paper,
      boxShadow: '3px 0 3px -2px rgba(0,0,0,.1)',
    },
  },
  cellTeamWrap: {
    display: 'flex',
    alignItems: 'center',
  },
  cellTeamRank: {
    width: 20,
    marginRight: 5,
  },
  cellTeamName: {
    margin: '0 0 0 5px',
  },
}));

const StandingsTableBody = ({ data }) => {
  const classes = useStyles();

  const standingsGroupBy = useSelector(getStandingsGroupBy);

  return (
    <TableBody>
      {data.map(
        ({
          teamId,
          confRank,
          teamSitesOnly,
          win,
          loss,
          winPct,
          gamesBehind,
          confWin,
          confLoss,
          homeWin,
          homeLoss,
          awayWin,
          awayLoss,
          lastTenWin,
          lastTenLoss,
          divRank,
        }: TTeamStandings) => (
          <TableRow key={teamId} hover className={classes.tableRow}>
            <TableCell className={classes.tableCellTeam}>
              <div className={classes.cellTeamWrap}>
                <b className={classes.cellTeamRank}>
                  {standingsGroupBy === 'standings_conference'
                    ? confRank
                    : divRank}
                  .
                </b>
                <SVGIcon
                  name={teamSitesOnly.teamTricode}
                  width={30}
                  height={30}
                />
                <p className={classes.cellTeamName}>
                  <Hidden xsDown>
                    {`${teamSitesOnly.teamName} ${teamSitesOnly.teamNickname}`}
                  </Hidden>
                  <Hidden smUp>{teamSitesOnly.teamTricode}</Hidden>
                </p>
              </div>
            </TableCell>

            <TableCell align="center">{win}</TableCell>
            <TableCell align="center">{loss}</TableCell>
            <TableCell align="center">{winPct}</TableCell>
            <TableCell align="center">{gamesBehind}</TableCell>
            <TableCell align="center">{`${confWin} - ${confLoss}`}</TableCell>
            <TableCell align="center">{`${homeWin} - ${homeLoss}`}</TableCell>
            <TableCell align="center">{`${awayWin} - ${awayLoss}`}</TableCell>
            <TableCell align="center">{`${lastTenWin} - ${lastTenLoss}`}</TableCell>
            <TableCell align="right">{teamSitesOnly.streakText}</TableCell>
          </TableRow>
        ),
      )}
    </TableBody>
  );
};

export default StandingsTableBody;
