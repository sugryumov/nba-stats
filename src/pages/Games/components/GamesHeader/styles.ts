import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      marginBottom: 32,

      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
  }),
);

export { useStyles };
