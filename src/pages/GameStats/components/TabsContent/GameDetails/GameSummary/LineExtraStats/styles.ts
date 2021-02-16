import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      border: `1px solid ${theme.palette.secondaryColor}`,
      textAlign: 'center',
    },

    leadChanges: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%',
      width: '50%',
      borderRight: `1px solid ${theme.palette.secondaryColor}`,
    },

    timesTied: {
      width: '50%',
    },

    title: {
      fontSize: 14,
      textTransform: 'uppercase',
    },

    score: {
      fontSize: 36,
      fontWeight: 600,
      lineHeight: '54px',

      [theme.breakpoints.down('xs')]: {
        fontSize: 24,
        lineHeight: '42px',
      },
    },
  }),
);

export { useStyles };
