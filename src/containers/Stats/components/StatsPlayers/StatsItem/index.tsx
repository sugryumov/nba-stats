import React from 'react';
import Card from '@material-ui/core/Card';
import { toPercentage } from 'helpers/normalize';
import { useStyles } from './styles';

const StatsItem = ({ title, playerstats }) => {
  const classes = useStyles();

  const renderStats = () => {
    return playerstats?.map((player, idx) => {
      const fgPtc = player.FG_PCT && toPercentage(player.FG_PCT);
      const fg3Ptc = player.FG3_PCT && toPercentage(player.FG3_PCT);

      return (
        <div key={player.PLAYER_ID} className={classes.player}>
          <p>
            {idx + 1}. {player.PLAYER_NAME}{' '}
            <span className={classes.abbr}>{player.TEAM_ABBREVIATION}</span>
          </p>
          <p>
            {player.PTS ||
              player.REB ||
              player.AST ||
              player.BLK ||
              player.STL ||
              player.TOV ||
              player.FG3M ||
              fgPtc ||
              fg3Ptc ||
              player.FTM ||
              player.NBA_FANTASY_PTS ||
              player.FANTASY_POINTS}
          </p>
        </div>
      );
    });
  };

  return (
    <Card className={classes.root}>
      <p className={classes.title}>{title}</p>

      {renderStats()}
    </Card>
  );
};

export default StatsItem;
