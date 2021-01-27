import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getActiveTab } from 'common/selectors/GameStats/getBoxScore';
import {
  changedActiveTabAction,
  getBoxScoreAction,
} from './store/BoxScore/actions';
import TabsGameStats from './components/TabsGameStats';
import TabsContent from './components/TabsContent';
import { TTabsGameStatsValue } from './store/BoxScore/entities';

const GameStatsContainer = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const activeTab = useSelector(getActiveTab);

  useEffect(() => {
    const gameDate = new URLSearchParams(search).get('date')!;
    const gameId = new URLSearchParams(search).get('id')!;

    const params = {
      gameDate,
      gameId,
    };

    dispatch(getBoxScoreAction.request(params));
  }, [dispatch, search]);

  const handleTabClick = (_, activeTab: TTabsGameStatsValue) => {
    dispatch(changedActiveTabAction(activeTab));
  };

  return (
    <>
      <TabsGameStats activeTab={activeTab} handleTabClick={handleTabClick} />
      <TabsContent activeTab={activeTab} />
    </>
  );
};

export default GameStatsContainer;
