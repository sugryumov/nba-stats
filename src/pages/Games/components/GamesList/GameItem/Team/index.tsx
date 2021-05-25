import React from 'react';
import { NAME_TEAMS } from 'common/constants/nameTeams';
import SVGIcon from 'common/components/SVGIcon';
import { nbaTeam } from 'common/components/SVGIcon/interface';
import { GAME_STATUS, STAGE_STATUS } from 'common/constants/gameStatus';
import { useStyles } from './styles';

const Team = ({ team, statusNum, reverse, seasonStageId, seedNum }) => {
  const classes = useStyles();

  return (
    <div className={reverse ? classes.hTeam : classes.vTeam}>
      <div className={classes.info}>
        <SVGIcon name={nbaTeam[team.triCode]} width={54} height={54} />

        <p className={classes.name}>
          {seasonStageId === STAGE_STATUS.playoff && (
            <span className={classes.seedNum}>{seedNum}</span>
          )}

          {NAME_TEAMS[team.triCode]}
        </p>

        {seasonStageId !== STAGE_STATUS.playoff && (
          <p className={classes.winLoss}>
            {team.win} - {team.loss}
          </p>
        )}
      </div>

      <p className={classes.score}>
        {statusNum === GAME_STATUS.finished || statusNum === GAME_STATUS.live
          ? team.score
          : ''}
      </p>
    </div>
  );
};

export default Team;
