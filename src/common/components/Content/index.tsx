import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { pages } from './constants';

const Content = () => (
  <Switch>
    {pages.map((props: RouteProps, idx) => {
      const { path } = props;

      return (
        <Route
          {...props}
          path={`${process.env.PUBLIC_URL}${path}`}
          key={`route_${idx}`}
        />
      );
    })}
  </Switch>
);

export default Content;
