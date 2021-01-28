import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },

    button: {
      'width': '100%',
      'border': 'none !important',
      'boxShadow': `0px 0px 6px -2px rgba(0,0,0,.3)`,
      'borderTopLeftRadius': 0,
      'borderTopRightRadius': 0,
      'fontSize': 12,

      '&:hover': {
        border: 'none',
      },
    },
  }),
);

export { useStyles };
