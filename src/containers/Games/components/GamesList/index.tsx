import React from 'react';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { TeamName } from 'enums/teamName';
import { ITheme } from 'interfaces/theme';
import { nbaTeam } from 'common/components/SVGIcon/interface';
import LoadingLayout from 'common/components/LoadingLayout';
import { statusGame } from 'containers/Games/constants';
import { TGameItem } from 'containers/Games/store/entities';
import {
  getGamesListData,
  getGamesListError,
  getGamesListLoading,
} from 'common/selectors/Games/gamesList';
import SVGIcon from 'common/components/SVGIcon';

const useStyles = makeStyles((theme: ITheme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px 20px',

    [theme.breakpoints.down('xs')]: {
      padding: '20px 10px',
    },
  },
  team: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: '2',
    alignItems: 'center',
  },
  info: {
    textAlign: 'center',
  },
  score: {
    fontSize: 24,
    fontWeight: 600,

    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  name: {
    marginBottom: 10,
    fontSize: 14,

    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  winLoss: {
    fontSize: 14,

    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  status: {
    flex: '1.6',
    textAlign: 'center',

    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },
  statusPpd: {
    fontSize: 26,
    fontWeight: 600,
  },
  timeWrap: {},
  easternTime: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 600,

    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
  },
  mskTime: {
    fontSize: 14,

    [theme.breakpoints.down('xs')]: {
      fontSize: 10,
    },
  },
}));

const GamesList = () => {
  const classes = useStyles();

  const gamesList = useSelector(getGamesListData);
  const gamesError = useSelector(getGamesListError);
  const gamesLoading = useSelector(getGamesListLoading);

  const renderContent = () => {
    return gamesList.map(
      ({
        gameId,
        startTimeEastern,
        startTimeUTC,
        hTeam,
        vTeam,
        statusNum,
        extendedStatusNum,
      }: TGameItem) => {
        const mskTime = dayjs(startTimeUTC)
          .tz('Europe/Moscow')
          .format('DD.MM HH:mm');

        return (
          <Grid key={gameId} item lg={4} sm={6} xs={12}>
            <Card>
              <div className={classes.container}>
                <div className={classes.team}>
                  <div className={classes.info}>
                    <SVGIcon
                      name={nbaTeam[vTeam.triCode]}
                      width={54}
                      height={54}
                    />

                    <p className={classes.name}>{TeamName[vTeam.triCode]}</p>

                    <p className={classes.winLoss}>
                      {vTeam.win} - {vTeam.loss}
                    </p>
                  </div>

                  <p className={classes.score}>
                    {statusNum === statusGame.finished ? vTeam.score : ''}
                  </p>
                </div>

                <div className={classes.status}>
                  {extendedStatusNum === 2 ? (
                    <p className={classes.statusPpd}>PPD</p>
                  ) : statusNum === statusGame.finished ? (
                    'FINAL'
                  ) : (
                    <div className={classes.timeWrap}>
                      <p className={classes.easternTime}>{startTimeEastern}</p>
                      <p className={classes.mskTime}>{`${mskTime} MSK`}</p>
                    </div>
                  )}
                </div>

                <div className={classes.team}>
                  <p className={classes.score}>
                    {statusNum === statusGame.finished ? hTeam.score : ''}
                  </p>

                  <div className={classes.info}>
                    <SVGIcon
                      name={nbaTeam[hTeam.triCode]}
                      width={54}
                      height={54}
                    />

                    <p className={classes.name}>{TeamName[hTeam.triCode]}</p>

                    <p className={classes.winLoss}>
                      {hTeam.win} - {hTeam.loss}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Grid>
        );
      },
    );
  };

  return (
    <LoadingLayout data={gamesList} loading={gamesLoading} error={gamesError}>
      <Grid container spacing={3}>
        {renderContent()}
      </Grid>
    </LoadingLayout>
  );
};

export default GamesList;
