import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';
import SVGIcon from 'common/components/SVGIcon';
import { TTeamStandings } from 'containers/Standings/store/Conference/entities';

const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    '&:not(:last-child)': {
      marginBottom: 50,
    },
  },
  table: {
    overflowX: 'auto',
  },
  toolbar: {
    padding: '0 16px',
  },
  teamHead: {
    backgroundColor: theme.palette.secondaryColor,
  },
  teamHeadCell: {
    minWidth: 220,
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
    marginRight: 10,
  },
  teamName: {
    margin: '0 0 0 7px',
  },
}));

const StandingsTable = ({ data, conferenceName }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">{conferenceName}</Typography>
      </Toolbar>

      <div className={classes.table}>
        <Table aria-label="caption table">
          <TableHead className={classes.teamHead}>
            <TableRow>
              <TableCell className={classes.teamHeadCell}>TEAM</TableCell>
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
              }: TTeamStandings) => (
                <TableRow key={teamId} hover>
                  <TableCell>
                    <div className={classes.teamBody}>
                      <b className={classes.rank}>{confRank}.</b>
                      <SVGIcon
                        name={teamSitesOnly.teamTricode}
                        width={30}
                        height={30}
                      />
                      <p className={classes.teamName}>
                        {`${teamSitesOnly.teamName} ${teamSitesOnly.teamNickname}`}
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
