import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',

      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    picker: {
      position: 'relative',
      zIndex: 5,

      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    icon: {
      position: 'absolute',
      right: 0,
      top: 4,
    },
  }),
);

export { useStyles };
