import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    hTeam: {
      display: 'flex',
      justifyContent: 'space-between',
      flex: '2',
      alignItems: 'center',
    },
    vTeam: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
      flex: '2',
      alignItems: 'center',
    },
    info: {
      textAlign: 'center',
    },
    name: {
      marginBottom: 10,
      fontSize: 14,

      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
    seedNum: {
      padding: '0px 4px',
      marginRight: 2,
      fontSize: 12,
      background: theme.palette.secondaryColor,
      borderRadius: 4,
    },
    winLoss: {
      fontSize: 14,

      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
    score: {
      fontSize: 24,
      fontWeight: 600,

      [theme.breakpoints.down('xs')]: {
        fontSize: 20,
      },
    },
  }),
);

export { useStyles };
