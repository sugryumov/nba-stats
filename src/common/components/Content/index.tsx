import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { pages } from './constants';

const Content = () => {
  return (
    <Switch>
      {pages.map((props: RouteProps, idx) => (
        <Route
          {...props}
          key={`route_${idx}`}
          basename={window.location.pathname || ''}
        />
      ))}
    </Switch>
  );
};

export default Content;
