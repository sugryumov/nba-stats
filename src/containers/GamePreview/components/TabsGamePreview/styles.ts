import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      marginBottom: 32,
      overflow: 'hidden',
    },

    tabs: {},

    tab: {
      [theme.breakpoints.down('xs')]: {
        width: '50%',
      },
    },

    indicator: {
      backgroundColor: theme.palette.primary.main,
    },
  }),
);

export { useStyles };
