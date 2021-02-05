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
  }),
);

export { useStyles };
