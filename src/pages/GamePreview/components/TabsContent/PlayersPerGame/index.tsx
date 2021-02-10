import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoadingLayout from 'common/components/LoadingLayout';
import { fetchPlayersPerGame } from 'pages/GamePreview/store/PlayersPerGame';
import {
  getPlayersPerGame,
  getPlayersPerGameError,
  getPlayersPerGameLoading,
} from 'common/selectors/GamePreview/playersPerGame';
import PlayersPerGameTable from 'pages/GamePreview/components/TabsContent/PlayersPerGame/PlayersPerGameTable';

const PlayersPerGame = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const playersPerGame = useSelector(getPlayersPerGame);
  const playersPerGameLoading = useSelector(getPlayersPerGameLoading);
  const playersPerGameError = useSelector(getPlayersPerGameError);

  useEffect(() => {
    const gameDate = new URLSearchParams(search).get('date')!;
    const gameId = new URLSearchParams(search).get('id')!;

    const params = {
      gameDate,
      gameId,
    };

    if (!playersPerGame.hTeam) {
      dispatch(fetchPlayersPerGame(params));
    }
  }, [dispatch, search, playersPerGame.hTeam]);

  return (
    <LoadingLayout
      data={playersPerGame}
      loading={playersPerGameLoading}
      error={playersPerGameError}
    >
      {Object.entries(playersPerGame)?.map(([key, value]) => (
        <PlayersPerGameTable
          key={key}
          team={value?.name}
          roster={value?.players.player}
        />
      ))}
    </LoadingLayout>
  );
};

export default PlayersPerGame;
