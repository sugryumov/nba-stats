import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBoxScoreAction } from './store/BoxScore/actions';
import TabsGameStats from './components/TabsGameStats';
import TabsContent from './components/TabsContent';
import { TTabsGameStatsValue } from 'common/constants/tabsGameStats';

const GameStatsContainer = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const [activeTab, setActiveTab] = useState<TTabsGameStatsValue>('box-score');

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
    setActiveTab(activeTab);
  };

  return (
    <>
      <TabsGameStats activeTab={activeTab} handleTabClick={handleTabClick} />
      <TabsContent activeTab={activeTab} />
    </>
  );
};

export default GameStatsContainer;
