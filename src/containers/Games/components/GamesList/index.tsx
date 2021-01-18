import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid/Grid';
import LoadingLayout from 'common/components/LoadingLayout';
import {
  getGamesListData,
  getGamesListError,
  getGamesListLoading,
} from 'common/selectors/Games/gamesList';
import GameItem from './GameItem';

const GamesList = () => {
  const gamesList = useSelector(getGamesListData);
  const gamesError = useSelector(getGamesListError);
  const gamesLoading = useSelector(getGamesListLoading);

  const renderContent = () => {
    return gamesList.map(game => {
      return (
        <Grid key={game.gameId} item lg={4} sm={6} xs={12}>
          <GameItem game={game} />
        </Grid>
      );
    });
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
