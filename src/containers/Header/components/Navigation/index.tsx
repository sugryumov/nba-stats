import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ITheme } from 'interfaces/theme';
import { menuItems } from './constants';

const useStyles = makeStyles((theme: ITheme) => ({
  navigation: {
    padding: ' 30px 0',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    '&:not(:last-child)': {
      marginRight: '30px',
    },
  },
  link: {
    color: theme.palette.linkColor,
  },
  activeLink: {
    color: theme.palette.activeLinkColor,
  },
}));

function Navigation() {
  const classes = useStyles();

  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        {menuItems.map((item, idx) => (
          <li key={`${item.name}_${idx}`} className={classes.item}>
            <NavLink
              exact
              to={item.path}
              className={classes.link}
              activeClassName={classes.activeLink}
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
