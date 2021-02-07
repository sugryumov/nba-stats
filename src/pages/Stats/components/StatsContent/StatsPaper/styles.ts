import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:not(:last-child)': {
        marginBottom: 50,
      },
    },

    title: {
      padding: '20px 0 12px 16px',
    },
  }),
);

export { useStyles };
