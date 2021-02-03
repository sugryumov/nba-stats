import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      padding: '20px 20px',

      [theme.breakpoints.down('xs')]: {
        padding: '20px 10px',
      },
    },

    title: {
      paddingBottom: 10,
      marginBottom: 10,
      color: theme.palette.primary.main,
      fontSize: 14,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      borderBottom: `1px solid ${theme.palette.secondaryColor}`,
    },

    player: {
      'display': 'flex',
      'justifyContent': 'space-between',

      '&:not(:last-child)': {
        marginBottom: 10,
      },
    },

    abbr: {
      marginLeft: 5,
      fontSize: 12,
      opacity: 0.7,
    },
  }),
);

export { useStyles };
