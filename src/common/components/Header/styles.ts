import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background?.paper,
      marginBottom: 50,

      [theme.breakpoints.down('xs')]: {
        marginBottom: 20,
      },
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: theme.maxWidth,
      margin: theme.margin,
      padding: '10px 16px',
    },
    icon: {
      color: theme.whiteColor,
    },
    drawer: {
      '& .MuiDrawer-paper': {
        padding: '0 20px',
        backgroundColor: theme.palette.background?.paper,
      },
    },
    pageName: {
      color: theme.whiteColor,
      textTransform: 'uppercase',
    },
    controls: {},
  }),
);

export { useStyles };
