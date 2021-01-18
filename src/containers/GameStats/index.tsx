import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  getActivePlayers,
  getBoxScoreError,
  getBoxScoreLoading,
} from 'common/selectors/GameStats/getBoxScore';
import { getBoxScoreAction } from './store/BoxScore/actions';
import BoxScoreTable from './components/BoxScoreTable';
import LoadingLayout from 'common/components/LoadingLayout';

const GameStatsContainer = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    const gameDate = new URLSearchParams(search).get('date')!;
    const gameId = new URLSearchParams(search).get('id')!;

    const params = {
      gameDate,
      gameId,
    };

    dispatch(getBoxScoreAction.request(params));
  }, [dispatch, search]);

  const activePlayers = useSelector(getActivePlayers);
  const boxScoreLoading = useSelector(getBoxScoreLoading);
  const boxScoreError = useSelector(getBoxScoreError);

  const renderTable = () => {
    return Object.entries(activePlayers)?.map(([team, players]) => {
      return (
        <div key={team} style={{ paddingBottom: 40 }}>
          <BoxScoreTable data={players} team={team} />
        </div>
      );
    });
  };

  return (
    <LoadingLayout
      data={activePlayers}
      loading={boxScoreLoading}
      error={boxScoreError}
    >
      {renderTable()}
    </LoadingLayout>
  );
};

export default GameStatsContainer;
