import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import InstallPWA from 'common/components/IsntallPWA';
import { menuItems } from 'common/constants/menuItems';
import Navigation from './components/Navigation';
import { useStyles } from './styles';

const Header = ({ theme, setTheme }) => {
  const classes = useStyles();

  const { pathname, search } = useLocation();

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [gameInfo, setGameInfo] = useState<string | null>(null);

  useEffect(() => {
    const gameUrlCode = new URLSearchParams(search).get('code');
    const gameDate: any = new URLSearchParams(search).get('date');

    setGameInfo(`${dayjs(gameDate).format('DD MMMM')} / ${gameUrlCode}`);
  }, [search]);

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
    <header className={classes.root}>
      <div className={classes.wrapper}>
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
          <p className={classes.pageName}>{pageName ? pageName : gameInfo}</p>
        </Hidden>

        <div className={classes.controls}>
          <InstallPWA />

          <IconButton edge="end" onClick={onClickThemeHandler}>
            {icon}
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
