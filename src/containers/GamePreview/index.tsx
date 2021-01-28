import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LoadingLayout from 'common/components/LoadingLayout';
import {
  getGetArticleError,
  getGetArticleList,
  getGetArticleLoading,
} from 'common/selectors/GamePreview/gameArticle';
import { getGameArticleAction } from 'containers/GamePreview/store/GameArticle/actions';
import ArticelList from 'containers/GamePreview/components/ArticelList';

const GamePreviewContainer = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  const articleList = useSelector(getGetArticleList);
  const articleLoading = useSelector(getGetArticleLoading);
  const articleError = useSelector(getGetArticleError);

  useEffect(() => {
    const gameDate = new URLSearchParams(search).get('date')!;
    const gameId = new URLSearchParams(search).get('id')!;

    const params = {
      gameDate,
      gameId,
    };

    dispatch(getGameArticleAction.request(params));
  }, [dispatch, search]);

  return (
    <LoadingLayout
      data={articleList}
      loading={articleLoading}
      error={articleError}
    >
      <ArticelList articleList={articleList} />
    </LoadingLayout>
  );
};

export default GamePreviewContainer;
