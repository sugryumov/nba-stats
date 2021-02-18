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
      padding: 20,
      backgroundColor: theme.palette.background?.paper,
    },
  }),
);

export { useStyles };
