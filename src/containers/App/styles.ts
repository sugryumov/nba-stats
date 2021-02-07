import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    container: {
      maxWidth: 1320,
      padding: '0 16px 40px',
      margin: '0 auto',
    },
  }),
);

export { useStyles };
