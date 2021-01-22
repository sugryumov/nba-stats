import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 20,

      [theme.breakpoints.down('sm')]: {
        padding: 0,
      },
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',

      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    title: {
      marginBottom: 10,

      [theme.breakpoints.down('sm')]: {
        margin: 0,
        fontSize: 16,
        padding: 16,
      },
    },
  }),
);

export { useStyles };
