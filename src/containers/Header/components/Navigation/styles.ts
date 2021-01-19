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
      fontSize: 14,
      color: theme.palette.linkColor,
      textTransform: 'uppercase',
    },
    activeLink: {
      color: theme.palette.activeLinkColor,
    },
  }),
);

export { useStyles };
