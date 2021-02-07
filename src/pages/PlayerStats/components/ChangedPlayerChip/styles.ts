import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '20px 0',
    },
    chip: {
      margin: '0 10px 10px 0',
    },
  }),
);

export { useStyles };
