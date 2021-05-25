import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '30px 20px',

      [theme.breakpoints.down('xs')]: {
        padding: '20px 10px',
      },
    },
    rootPlayoff: {
      padding: '0px 20px 30px',
    },
    title: {
      paddingTop: 30,
      textAlign: 'center',
      fontSize: 12,
    },
  }),
);

export { useStyles };
