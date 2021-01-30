import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 20,

      [theme.breakpoints.down('xs')]: {
        padding: 16,
      },
    },

    date: {
      fontSize: 12,
    },

    line: {
      display: 'block',
      margin: '0 0 10px 0',
    },

    title: {
      marginBottom: 16,
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: 1.4,

      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
      },
    },

    text: {
      marginBottom: 14,
      fontSize: 16,
      lineHeight: 1.4,

      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
      },
    },
  }),
);

export { useStyles };
