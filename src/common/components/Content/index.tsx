import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { pages } from './constants';

const Content = () => {
  console.log('window.location.pathname', window.location.pathname);
  return (
    <Switch>
      {pages.map((props: RouteProps, idx) => (
        <Route {...props} key={`route_${idx}`} basename="/nba-stats" />
      ))}
    </Switch>
  );
};

export default Content;
