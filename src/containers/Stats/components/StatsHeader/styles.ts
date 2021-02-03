import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      marginBottom: 32,

      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },

    title: {
      [theme.breakpoints.down('xs')]: {
        marginBottom: 20,
        fontSize: 16,
      },
    },

    subtitle: {
      fontSize: 12,
      fontWeight: 100,
      opacity: 0.8,
    },

    formControl: {
      'minWidth': 150,
      'height': 40,

      '& .MuiInputBase-root': {
        height: 40,
      },

      '& .MuiInputLabel-root': {
        fontSize: 12,
      },

      '& .MuiSelect-select:focus': {
        background: 'transparent',
      },

      [theme.breakpoints.down('xs')]: {
        minWidth: '100%',
      },
    },
  }),
);

export { useStyles };
