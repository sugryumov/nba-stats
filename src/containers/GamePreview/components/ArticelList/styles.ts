import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 20,

      [theme.breakpoints.down('xs')]: {
        padding: 16,
      },
    },

    title: {
      marginBottom: 30,

      [theme.breakpoints.down('xs')]: {
        marginBottom: 15,
        fontSize: 16,
        fontWeight: 'bold',
      },
    },

    text: {
      marginBottom: 20,

      [theme.breakpoints.down('xs')]: {
        marginBottom: 10,
        fontSize: 14,
      },
    },
  }),
);

export { useStyles };
