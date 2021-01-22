import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    list: {
      display: 'flex',
      flexDirection: 'row',
    },
    listMobile: {
      flexDirection: 'column',
    },
    item: {
      '&:not(:last-child)': {
        marginRight: '30px',
      },
    },
    itemMobile: {
      marginTop: '30px',
    },
    link: {
      'fontSize': 14,
      'color': theme.palette.linkColor,
      'fontWeight': 500,
      'letterSpacing': 0.4,
      'textTransform': 'uppercase',
      'opacity': 0.7,

      '&:hover': {
        opacity: 1,
      },
    },
    activeLink: {
      opacity: 1,
      color: theme.palette.linkColor,
    },
  }),
);

export { useStyles };
