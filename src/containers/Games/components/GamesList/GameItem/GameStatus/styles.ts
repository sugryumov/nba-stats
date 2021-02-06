import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      flex: '1.6',
      textAlign: 'center',

      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
    ppdStatus: {
      fontSize: 26,
      fontWeight: 600,
    },
    easternTime: {
      marginBottom: 5,
      fontSize: 18,
      fontWeight: 600,

      [theme.breakpoints.down('xs')]: {
        fontSize: 13,
      },
    },
    mskTime: {
      fontSize: 14,

      [theme.breakpoints.down('xs')]: {
        fontSize: 10,
      },
    },
    live: {
      display: 'inline-block',
      padding: '2px 6px',
      marginBottom: 5,
      backgroundColor: theme.redColor,
      borderRadius: 2,
      fontSize: 12,
      color: theme.whiteColor,
    },
  }),
);

export { useStyles };
