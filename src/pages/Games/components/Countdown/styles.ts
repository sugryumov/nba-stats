import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: 50,
      textAlign: 'center',

      [theme.breakpoints.down('xs')]: {
        marginBottom: 20,
      },
    },

    time: {
      display: 'flex',
      justifyContent: 'center',
    },

    title: {
      marginBottom: 24,

      [theme.breakpoints.down('sm')]: {
        fontSize: 48,
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: 26,
      },
    },

    item: {
      'width': 150,
      'textAlign': 'center',

      '&:not(:last-child)': {
        marginRight: 15,
      },

      [theme.breakpoints.down('sm')]: {
        width: 100,
      },

      [theme.breakpoints.down('xs')]: {
        width: 60,
      },
    },

    value: {
      fontSize: 112,
      fontWeight: 100,
      lineHeight: 1.2,

      [theme.breakpoints.down('sm')]: {
        fontSize: 64,
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
      },
    },

    key: {
      fontSize: 20,

      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      },

      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
      },
    },
  }),
);

export { useStyles };
