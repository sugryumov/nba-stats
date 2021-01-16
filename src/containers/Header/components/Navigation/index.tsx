import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';
import { menuItems } from './constants';

const useStyles = makeStyles((theme: ITheme) => ({
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
    color: theme.palette.linkColor,
  },
  activeLink: {
    color: theme.palette.activeLinkColor,
  },
}));

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
