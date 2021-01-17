import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { ITheme } from 'interfaces/theme';
import { menuItems } from './constants';
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
  pageName: {
    color: theme.palette.activeLinkColor,
    textTransform: 'uppercase',
  },
}));

const Header = ({ theme, setTheme }) => {
  const classes = useStyles();

  const { pathname } = useLocation();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const icon =
    theme === 'light' ? (
      <Brightness4Icon className={classes.icon} />
    ) : (
      <Brightness7Icon className={classes.icon} />
    );

  const onClickThemeHandler = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenuHandler = (open: boolean) => _ => {
    setOpenMenu(open);
  };

  const pageName = menuItems.find(
    ({ path }) => `${process.env.PUBLIC_URL}${path}` === pathname,
  )?.name;

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Hidden xsDown>
          <Navigation />
        </Hidden>

        <Hidden smUp>
          <MenuRoundedIcon
            fontSize="large"
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

        <Hidden smUp>
          <p className={classes.pageName}>{pageName}</p>
        </Hidden>

        <IconButton edge="end" onClick={onClickThemeHandler}>
          {icon}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
