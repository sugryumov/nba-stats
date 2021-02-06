import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'types/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    container: {
      paddingBottom: '40px',
    },
    name: {
      fontSize: '18px',
      marginBottom: '5px',
    },
    info: {
      fontSize: '14px',
    },
    table: {
      overflowX: 'auto',
    },
  }),
);

export { useStyles };
