import React from 'react';
import { TeamName } from 'common/constants/teamName';
import SVGIcon from 'common/components/SVGIcon';
import { nbaTeam } from 'common/components/SVGIcon/interface';
import { statusGame } from 'common/constants/statusGame';
import { useStyles } from './styles';

const Team = ({ team, statusNum, reverse }) => {
  const classes = useStyles();

  return (
    <div className={reverse ? classes.hTeam : classes.vTeam}>
      <div className={classes.info}>
        <SVGIcon name={nbaTeam[team.triCode]} width={54} height={54} />

        <p className={classes.name}>{TeamName[team.triCode]}</p>

        <p className={classes.winLoss}>
          {team.win} - {team.loss}
        </p>
      </div>

      <p className={classes.score}>
        {statusNum === statusGame.finished || statusNum === statusGame.live
          ? team.score
          : ''}
      </p>
    </div>
  );
};

export default Team;
