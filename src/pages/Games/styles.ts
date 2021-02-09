import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {},

    button: {
      display: 'none',
    },

    [theme.breakpoints.down('xs')]: {
      button: {
        'display': 'block',
        'position': 'fixed',
        'right': 30,
        'bottom': 30,
        'backgroundColor': theme.palette.primary.main,
        'color': '#ffffff',

        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          opacity: 0.9,
        },
      },
    },
  }),
);

export { useStyles };
