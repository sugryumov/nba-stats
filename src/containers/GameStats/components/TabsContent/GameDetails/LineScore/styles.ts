import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '48%',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  }),
);

export { useStyles };
