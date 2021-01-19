import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuItems } from 'common/constants/menuItems';
import { useStyles } from './styles';

type TNavigationProps = {
  toggleMenu?: (open: boolean) => void;
};

function Navigation({ toggleMenu }: TNavigationProps) {
  const classes = useStyles();

  return (
    <nav>
      <ul className={toggleMenu ? classes.listMobile : classes.list}>
        {menuItems.map((item, idx) => (
          <li
            key={`${item.name}_${idx}`}
            className={toggleMenu ? classes.itemMobile : classes.item}
          >
            <NavLink
              exact
              to={`${process.env.PUBLIC_URL}${item.path}`}
              className={classes.link}
              activeClassName={classes.activeLink}
              onClick={toggleMenu && toggleMenu(false)}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
