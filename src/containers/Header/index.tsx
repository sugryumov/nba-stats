import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import MenuIcon from '@material-ui/icons/Menu';
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
    padding: '10px 16px',
  },
  icon: {
    color: theme.palette.activeLinkColor,
  },
  drawer: {
    '& .MuiDrawer-paper': {
      padding: '0 20px',
      backgroundColor: theme.palette.backgroundHeader,
    },
  },
}));

const Header = ({ theme, setTheme }) => {
  const classes = useStyles();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const icon =
    theme === 'light' ? (
      <Brightness3Icon className={classes.icon} />
    ) : (
      <Brightness7Icon className={classes.icon} />
    );

  const onClickThemeHandler = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenuHandler = (open: boolean) => _ => {
    setOpenMenu(open);
  };

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Hidden xsDown>
          <Navigation />
        </Hidden>

        <Hidden smUp>
          <MenuIcon
            className={classes.icon}
            onClick={toggleMenuHandler(true)}
          />
          <Drawer
            anchor="left"
            open={openMenu}
            onClose={toggleMenuHandler(false)}
            className={classes.drawer}
          >
            <Navigation toggleMenu={toggleMenuHandler} />
          </Drawer>
        </Hidden>

        <IconButton edge="end" onClick={onClickThemeHandler}>
          {icon}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
