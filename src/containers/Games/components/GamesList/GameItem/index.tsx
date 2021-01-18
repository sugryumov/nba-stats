import React from 'react';
import dayjs from 'dayjs';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { TeamName } from 'enums/teamName';
import { ITheme } from 'interfaces/theme';
import SVGIcon from 'common/components/SVGIcon';
import { nbaTeam } from 'common/components/SVGIcon/interface';
import { statusGame } from 'containers/Games/constants';
import { TGameItem } from 'containers/Games/store/entities';
import BoxScoreButton from '../BoxScoreButton';

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

const GameItem = ({ game }) => {
  const classes = useStyles();

  const {
    gameId,
    startTimeEastern,
    startTimeUTC,
    hTeam,
    vTeam,
    statusNum,
    extendedStatusNum,
  }: TGameItem = game;

  const mskTime = dayjs(startTimeUTC).tz('Europe/Moscow').format('DD.MM HH:mm');

  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.team}>
          <div className={classes.info}>
            <SVGIcon name={nbaTeam[vTeam.triCode]} width={54} height={54} />

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
            <SVGIcon name={nbaTeam[hTeam.triCode]} width={54} height={54} />

            <p className={classes.name}>{TeamName[hTeam.triCode]}</p>

            <p className={classes.winLoss}>
              {hTeam.win} - {hTeam.loss}
            </p>
          </div>
        </div>
      </div>

      <BoxScoreButton
        gameId={gameId}
        gameUrlCode={`${hTeam.triCode} - ${vTeam.triCode}`}
        disabled={statusNum !== statusGame.finished}
      />
    </Card>
  );
};

export default GameItem;
