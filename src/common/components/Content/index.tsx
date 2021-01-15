import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import { pages } from './constants';

const Content = () => {
  console.log('window.location.pathname', process.env.PUBLIC_URL);
  return (
    <Switch>
      {pages.map((props: RouteProps, idx) => {
        const { path } = props;

        console.log(`${process.env.PUBLIC_URL}${path}`);

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
};

export default Content;
