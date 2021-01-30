import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TTabsGamePreviewValue } from 'containers/GamePreview//store/entities';
import { clearPreviewArticlesAction } from 'containers/GamePreview/store/PreviewArticles/actions';
import TabsGamePreview from 'containers/GamePreview/components/TabsGamePreview';
import PreviewArticles from 'containers/GamePreview/components/TabsContent/PreviewArticles';
import PlayersPerGame from 'containers/GamePreview/components/TabsContent/PlayersPerGame';
import { clearPlayersPerGameAction } from 'containers/GamePreview/store/PlayersPerGame/actions';

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
