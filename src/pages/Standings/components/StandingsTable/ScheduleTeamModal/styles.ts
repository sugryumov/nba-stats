import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    paper: {
      position: 'absolute',
      width: 400,
      maxHeight: 500,
      padding: 20,
      overflowY: 'auto',
      backgroundColor: theme.palette.background?.paper,

      [theme.breakpoints.down('xs')]: {
        width: '90%',
        height: '90vh',
      },
    },

    title: {
      margin: '0 0 20px 0',

      [theme.breakpoints.down('xs')]: {
        fontSize: 16,
      },
    },

    game: {
      'display': 'grid',
      'gridTemplateColumns': '1.5fr 2fr',
      'alignItems': 'center',
      'paddingBottom': 10,

      '&:not(:last-child)': {
        marginBottom: 10,
        borderBottom: `1px solid ${theme.palette.secondaryColor}`,
      },
    },

    match: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      alignItems: 'center',
      width: '100%',
    },

    hTeam: {
      textAlign: 'right',
    },

    score: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      textAlign: 'center',
    },

    ppd: {
      textAlign: 'center',
    },
  }),
);

export { useStyles };
