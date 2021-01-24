import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      padding: 20,

      [theme.breakpoints.down('sm')]: {
        padding: 16,
      },
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      overflowX: 'auto',
    },
    title: {
      marginBottom: 10,

      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    line: {
      minWidth: 1,
      height: 100,
      margin: '0 20px',
      backgroundColor: theme.palette.secondaryColor,
    },
  }),
);

export { useStyles };
