import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoadingLayout from 'common/components/LoadingLayout';
import {
  getActivePlayers,
  getActiveTab,
  getBoxScoreError,
  getBoxScoreLoading,
} from 'common/selectors/GameStats';
import { changedActiveTab, fetchGameStats } from 'pages/GameStats/store';
import { TTabsGameStatsValue } from 'pages/GameStats/store/types';
import TabsGameStats from 'pages/GameStats/components/TabsGameStats';
import BoxScore from 'pages/GameStats/components/TabsContent/BoxScore';
import GameDetails from 'pages/GameStats/components/TabsContent/GameDetails';

const GameStatsContainer = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const activePlayers = useSelector(getActivePlayers);
  const boxScoreLoading = useSelector(getBoxScoreLoading);
  const boxScoreError = useSelector(getBoxScoreError);
  const activeTab = useSelector(getActiveTab);

  useEffect(() => {
    const gameDate = new URLSearchParams(search).get('date')!;
    const gameId = new URLSearchParams(search).get('id')!;

    const params = {
      gameDate,
      gameId,
    };

    dispatch(fetchGameStats(params));
  }, [dispatch, search]);

  const handleTabClick = (_, activeTab: TTabsGameStatsValue) => {
    dispatch(changedActiveTab(activeTab));
  };

  return (
    <>
      <TabsGameStats activeTab={activeTab} handleTabClick={handleTabClick} />

      <LoadingLayout
        data={activePlayers}
        loading={boxScoreLoading}
        error={boxScoreError}
      >
        {activeTab === 'box-score' && <BoxScore />}
        {activeTab === 'details' && Object.keys(activePlayers).length > 1 && (
          <GameDetails />
        )}
      </LoadingLayout>
    </>
  );
};

export default GameStatsContainer;
