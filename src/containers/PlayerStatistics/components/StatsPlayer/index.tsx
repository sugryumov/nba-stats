import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';
import {
  getSeasonAveragesData,
  getSeasonAveragesLoading,
} from 'common/selectors/Statistics/seasonAverages';
import Spinner from 'common/components/Spinner';
import StatsPlayerItem from './StatsPlayerItem';

const useStyles = makeStyles((theme: ITheme) => ({
  container: {},
  title: {
    padding: '50px 0 30px',
    textAlign: 'center',
    color: theme.palette.primaryColor,

    [theme.breakpoints.down('xs')]: {
      paddingTop: 20,
      fontSize: 24,
    },
  },
}));

const StatsPlayer = ({ changedPlayers }) => {
  const classes = useStyles();

  const [playerFullInfo, setPlayerFullInfo] = useState<any>(null);

  const seasonAveragesData = useSelector(getSeasonAveragesData);
  const seasonAveragesLoading = useSelector(getSeasonAveragesLoading);

  useEffect(() => {
    const concatPlayerInfo = changedPlayers?.reduce((acc, currentPlayer) => {
      const findSeasonAverages = seasonAveragesData
        .filter(({ player_id }) => player_id === currentPlayer.id)
        .map(el => (el ? { ...el, ...currentPlayer } : currentPlayer))
        .find(Boolean);

      return findSeasonAverages
        ? [...acc, findSeasonAverages]
        : [...acc, currentPlayer];
    }, []);

    setPlayerFullInfo(concatPlayerInfo);
  }, [seasonAveragesData, changedPlayers]);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>'20 - '21 SEASON AVERAGES</h1>

      {seasonAveragesLoading ? (
        <Spinner />
      ) : (
        <StatsPlayerItem playerFullInfo={playerFullInfo} />
      )}
    </div>
  );
};

export default StatsPlayer;
