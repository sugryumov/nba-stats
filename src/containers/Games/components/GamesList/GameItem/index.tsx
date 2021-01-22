import React from 'react';
import Card from '@material-ui/core/Card';
import { statusGame } from 'common/constants/statusGame';
import { TGameItem } from 'containers/Games/store/entities';
import BoxScoreButton from 'containers/Games/components/GamesList/BoxScoreButton';
import Team from 'containers/Games/components/GamesList/GameItem/Team';
import GameStatus from 'containers/Games/components/GamesList/GameItem/GameStatus';
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

      <BoxScoreButton
        gameId={gameId}
        gameUrlCode={`${vTeam.triCode} - ${hTeam.triCode}`}
        disabled={statusNum !== statusGame.finished}
      />
    </Card>
  );
};

export default GameItem;
