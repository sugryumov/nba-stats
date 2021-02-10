import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TTabsGamePreviewValue } from 'pages/GamePreview/store/types';
import { clearPreviewArticlesAction } from 'pages/GamePreview/store/PreviewArticles';
import TabsGamePreview from 'pages/GamePreview/components/TabsGamePreview';
import PreviewArticles from 'pages/GamePreview/components/TabsContent/PreviewArticles';
import PlayersPerGame from 'pages/GamePreview/components/TabsContent/PlayersPerGame';
import { clearPlayersPerGameAction } from 'pages/GamePreview/store/PlayersPerGame';

const GamePreviewContainer = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<TTabsGamePreviewValue>('articles');

  useEffect(() => {
    return () => {
      dispatch(clearPreviewArticlesAction());
      dispatch(clearPlayersPerGameAction());
    };
  }, [dispatch]);

  const handleTabClick = (_, activeTab: TTabsGamePreviewValue) => {
    setActiveTab(activeTab);
  };

  return (
    <>
      <TabsGamePreview activeTab={activeTab} handleTabClick={handleTabClick} />

      {activeTab === 'articles' && <PreviewArticles />}
      {activeTab === 'players' && <PlayersPerGame />}
    </>
  );
};

export default GamePreviewContainer;
