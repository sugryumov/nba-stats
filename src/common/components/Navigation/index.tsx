import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';
import { ROUTES } from 'common/constants/routes';

type TNavigationProps = {
  toggleMenu?: (open: boolean) => void;
};

function Navigation({ toggleMenu }: TNavigationProps) {
  const classes = useStyles();

  return (
    <nav>
      <ul className={toggleMenu ? classes.listMobile : classes.list}>
        {Object.keys(ROUTES).map(
          routeKey =>
            ROUTES[routeKey].DISPLAY_IN_MENU && (
              <li
                key={routeKey}
                className={toggleMenu ? classes.itemMobile : classes.item}
              >
                <NavLink
                  exact
                  to={`${ROUTES[routeKey].ROUTE}`}
                  className={classes.link}
                  activeClassName={classes.activeLink}
                  onClick={toggleMenu && toggleMenu(false)}
                >
                  {ROUTES[routeKey].NAME}
                </NavLink>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
