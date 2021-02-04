import React from 'react';
import { toPercentage } from 'helpers/normalize';
import { useStyles } from './styles';

const StatsItem = ({ title, stats, type }) => {
  const classes = useStyles();

  const renderStats = () => {
    return stats?.map((item, idx) => {
      const fgPtc = item.FG_PCT && toPercentage(item.FG_PCT);
      const fg3Ptc = item.FG3_PCT && toPercentage(item.FG3_PCT);
      const ftPtc = item.FT_PCT && toPercentage(item.FT_PCT);

      const statItemTitle =
        type === 'players' ? (
          <>
            {item.PLAYER_NAME}{' '}
            <span className={classes.abbr}>{item.TEAM_ABBREVIATION}</span>
          </>
        ) : (
          `${item.TEAM_CITY} ${item.TEAM_NAME}`
        );

      const statsItemType =
        item.PTS ||
        item.REB ||
        item.AST ||
        item.BLK ||
        item.STL ||
        item.TOV ||
        item.FG3M ||
        item.FTM ||
        item.NBA_FANTASY_PTS ||
        item.FANTASY_POINTS ||
        fgPtc ||
        fg3Ptc ||
        ftPtc;

      return (
        <div
          key={item.PLAYER_ID ? item.PLAYER_ID : item.TEAM_ID}
          className={classes.stats}
        >
          <p>
            {`${idx + 1}.`} {statItemTitle}
          </p>

          <p>{statsItemType}</p>
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      <p className={classes.title}>{title}</p>

      {renderStats()}
    </div>
  );
};

export default StatsItem;
