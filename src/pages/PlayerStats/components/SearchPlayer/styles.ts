import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'theme/i';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      '& .MuiInputLabel-root.Mui-focused': {
        color: theme.palette.primaryColor,
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primaryColor,
      },

      '& label': {
        [theme.breakpoints.down('xs')]: {
          fontSize: 14,
          lineHeight: 1.4,
        },
      },
    },
  }),
);

export { useStyles };
