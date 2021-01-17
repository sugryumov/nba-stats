import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { ConfDivName } from 'enums/confDivName';
import { ITheme } from 'interfaces/theme';
import SVGIcon from 'common/components/SVGIcon';
import { getStandingsGroupBy } from 'common/selectors/Standings/getStandings';
import { TTeamStandings } from 'containers/Standings/store/entities';

const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    '&:not(:last-child)': {
      marginBottom: 50,
    },
  },
  table: {
    overflowX: 'auto',
  },
  tableRow: {
    '& .MuiTableCell-root': {
      'padding': 5,

      '&:first-child': {
        paddingLeft: 15,
      },

      '&:last-child': {
        paddingRight: 15,
      },
    },

    '&:nth-child(8)': {
      '& .MuiTableCell-root': {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
      },
    },
  },
  toolbar: {
    padding: '0 16px',
  },
  teamHead: {
    'backgroundColor': theme.palette.secondaryColor,

    '& .MuiTableCell-head': {
      'padding': 10,
      'fontWeight': 400,

      '&:first-child': {
        paddingLeft: 15,
      },

      '&:last-child': {
        paddingRight: 15,
      },
    },
  },
  teamFixedCell: {
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
  teamHeadCell: {
    backgroundColor: theme.palette.secondaryColor,
  },
  teamLastTenCell: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  teamStreakCell: {
    width: 50,
    textAlign: 'right',
  },
  teamBody: {
    display: 'flex',
    alignItems: 'center',
  },
  rank: {
    width: 20,
    marginRight: 5,
  },
  teamName: {
    margin: '0 0 0 5px',
  },
}));

const StandingsTable = ({ data, name }) => {
  const classes = useStyles();

  const standingsGroupBy = useSelector(getStandingsGroupBy);

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">{ConfDivName[name]}</Typography>
      </Toolbar>

      <div className={classes.table}>
        <Table aria-label="caption table">
          <TableHead className={classes.teamHead}>
            <TableRow>
              <TableCell
                className={[classes.teamFixedCell, classes.teamHeadCell].join(
                  ' ',
                )}
              >
                TEAM
              </TableCell>
              <TableCell align="center">W</TableCell>
              <TableCell align="center">L</TableCell>
              <TableCell align="center">WIN%</TableCell>
              <TableCell align="center">GB</TableCell>
              <TableCell align="center">CONF</TableCell>
              <TableCell align="center">HOME</TableCell>
              <TableCell align="center">ROAD</TableCell>
              <TableCell className={classes.teamLastTenCell}>LAST 10</TableCell>
              <TableCell className={classes.teamStreakCell}>STREAK</TableCell>
            </TableRow>
          </TableHead>
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
                  <TableCell className={classes.teamFixedCell}>
                    <div className={classes.teamBody}>
                      <b className={classes.rank}>
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
                      <p className={classes.teamName}>
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
                  <TableCell align="right">
                    {teamSitesOnly.streakText}
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </div>
    </TableContainer>
  );
};

export default StandingsTable;
