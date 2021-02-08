import React from 'react';
import Card from '@material-ui/core/Card';
import { GAME_STATUS } from 'common/constants/gameStatus';
import { TGameItem } from 'pages/Games/store/entities';
import Team from 'pages/Games/components/GamesList/GameItem/Team';
import GameStatus from 'pages/Games/components/GamesList/GameItem/GameStatus';
import GameStatsButton from 'pages/Games/components/GamesList/GameItem/GameStatsButton';
import GamePreviewButton from 'pages/Games/components/GamesList/GameItem/GamePreviewButton';
import { useStyles } from './styles';

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
    clock,
    period,
  }: TGameItem = game;

  return (
    <Card>
      <div className={classes.root}>
        <Team team={vTeam} statusNum={statusNum} reverse={true} />

        <GameStatus
          startTimeUTC={startTimeUTC}
          startTimeEastern={startTimeEastern}
          statusNum={statusNum}
          period={period}
          clock={clock}
          extendedStatusNum={extendedStatusNum}
        />

        <Team team={hTeam} statusNum={statusNum} reverse={false} />
      </div>

      {statusNum === GAME_STATUS.notStarted ? (
        <GamePreviewButton
          gameId={gameId}
          gameUrlCode={`${vTeam.triCode} - ${hTeam.triCode}`}
          disabled={extendedStatusNum === GAME_STATUS.ppd}
        />
      ) : (
        <GameStatsButton
          gameId={gameId}
          gameUrlCode={`${vTeam.triCode} - ${hTeam.triCode}`}
        />
      )}
    </Card>
  );
};

export default GameItem;
