import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.backgroundHeader,
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
      color: theme.palette.activeLinkColor,
    },
    drawer: {
      '& .MuiDrawer-paper': {
        padding: '0 20px',
        backgroundColor: theme.palette.backgroundHeader,
      },
    },
    pageName: {
      color: theme.palette.activeLinkColor,
      textTransform: 'uppercase',
    },
  }),
);

export { useStyles };
