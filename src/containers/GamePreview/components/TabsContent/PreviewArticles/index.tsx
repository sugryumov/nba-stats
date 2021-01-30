import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import dayjs from 'dayjs';
import {
  getPreviewArticlesList,
  getPreviewArticlesError,
  getPreviewArticlesLoading,
} from 'common/selectors/GamePreview/previewArticles';
import LoadingLayout from 'common/components/LoadingLayout';
import { getPreviewArticlesAction } from 'containers/GamePreview/store/PreviewArticles/actions';
import { useStyles } from './styles';

const PreviewArticles = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { search } = useLocation();

  const articlesList = useSelector(getPreviewArticlesList);
  const articlesLoading = useSelector(getPreviewArticlesLoading);
  const articlesError = useSelector(getPreviewArticlesError);

  const { title, paragraphs, pubDateUTC } = articlesList;

  useEffect(() => {
    const gameDate = new URLSearchParams(search).get('date')!;
    const gameId = new URLSearchParams(search).get('id')!;

    const params = {
      gameDate,
      gameId,
    };

    if (title === '') {
      dispatch(getPreviewArticlesAction.request(params));
    }
  }, [dispatch, search, title]);

  const paragraphWithId = paragraphs.map((item, idx) => ({
    ...item,
    id: Date.now() + idx,
  }));

  return (
    <LoadingLayout
      data={articlesList}
      loading={articlesLoading}
      error={articlesError}
    >
      <Paper className={classes.root}>
        <p className={classes.date}>
          {dayjs(pubDateUTC).tz('Europe/Moscow').format('DD MMMM, HH:mm')}
        </p>

        <span className={classes.line}>---</span>

        <h1 className={classes.title}>{title}</h1>

        {paragraphWithId.map(({ paragraph, id }) => {
          return (
            <p key={id} className={classes.text}>
              {paragraph}
            </p>
          );
        })}
      </Paper>
    </LoadingLayout>
  );
};

export default PreviewArticles;
