import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { pages } from './constants';

const Routing = () => {
  return (
    <Switch>
      {pages.map((props: RouteProps, idx) => (
        <Route {...props} key={`route_${idx}`} />
      ))}
    </Switch>
  );
};

export default Routing;
