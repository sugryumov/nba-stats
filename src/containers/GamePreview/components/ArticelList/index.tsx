import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TGetGameArticleResponse } from 'containers/GamePreview/store/GameArticle/entities';
import { useStyles } from './styles';

type TArticleListProps = {
  articleList: TGetGameArticleResponse;
};

const ArticelList = ({ articleList }: TArticleListProps) => {
  const classes = useStyles();

  const { title, paragraphs } = articleList;

  const paragraphWithId = paragraphs.map((item, idx) => ({
    ...item,
    id: Date.now() + idx,
  }));

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>

      {paragraphWithId.map(({ paragraph, id }) => {
        return (
          <Typography key={id} variant="body1" className={classes.text}>
            {paragraph}
          </Typography>
        );
      })}
    </Paper>
  );
};

export default ArticelList;
