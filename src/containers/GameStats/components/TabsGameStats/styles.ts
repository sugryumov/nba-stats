import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: 32,
      overflow: 'hidden',
    },

    tabs: {},

    tab: {},
  }),
);

export { useStyles };
