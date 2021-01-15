import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { ITheme } from 'interfaces/theme';
import Navigation from './components/Navigation';

const useStyles = makeStyles((theme: ITheme) => ({
  header: {
    backgroundColor: theme.palette.backgroundHeader,
    marginBottom: 50,

    [theme.breakpoints.down('xs')]: {
      marginBottom: 20,
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: theme.maxWidth,
    margin: theme.margin,
    padding: '0 16px',
  },
  icon: {
    color: theme.palette.activeLinkColor,
  },
}));

const Header = ({ theme, setTheme }) => {
  const classes = useStyles();

  const icon =
    theme === 'light' ? (
      <Brightness3Icon className={classes.icon} />
    ) : (
      <Brightness7Icon className={classes.icon} />
    );

  const onClickThemeHandler = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Navigation />

        <IconButton edge="end" onClick={onClickThemeHandler}>
          {icon}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
