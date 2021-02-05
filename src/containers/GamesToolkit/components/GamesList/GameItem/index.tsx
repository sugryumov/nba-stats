import React from 'react';
import Card from '@material-ui/core/Card';
import { statusGame } from 'common/constants/statusGame';
import { TGameItem } from 'containers/GamesToolkit/store/types';
import Team from 'containers/GamesToolkit/components/GamesList/GameItem/Team';
import GameStatus from 'containers/GamesToolkit/components/GamesList/GameItem/GameStatus';
import GameStatsButton from 'containers/GamesToolkit/components/GamesList/GameItem/GameStatsButton';
import GamePreviewButton from 'containers/GamesToolkit/components/GamesList/GameItem/GamePreviewButton';
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

      {statusNum === statusGame.notStarted ? (
        <GamePreviewButton
          gameId={gameId}
          gameUrlCode={`${vTeam.triCode} - ${hTeam.triCode}`}
          disabled={extendedStatusNum === statusGame.ppd}
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
