import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from 'common/constants/routes';
import { App } from 'containers/App';

const RouterContainer = () => {
  const Games = React.lazy(() => import('../../pages/Games'));
  const Standings = React.lazy(() => import('../../pages/Standings'));
  const GamePreview = React.lazy(() => import('../../pages/GamePreview'));
  const GameStats = React.lazy(() => import('../../pages/GameStats'));
  // const Stats = React.lazy(() => import('../../pages/Stats'));
  // const Playoff = React.lazy(() => import('../../pages/Playoff'));
  // const News = React.lazy(() => import('../../pages/News'));
  const PlayerStats = React.lazy(() => import('../../pages/PlayerStats'));

  return (
    <Router>
      <App>
        <Switch>
        <Route path={ROUTES.GAMES.ROUTE} exact component={Games} />
          <Route path={ROUTES.STANDINGS.ROUTE} exact component={Standings} />
          <Route path={ROUTES.GAME_PREVIEW.ROUTE} exact component={GamePreview} />
          <Route path={ROUTES.GAME_STATS.ROUTE} exact component={GameStats} />
          {/* <Route path={ROUTES.STATS.ROUTE} exact component={Stats} /> */}
          {/* <Route path={ROUTES.PLAYOFF.ROUTE} exact component={Playoff} /> */}
          {/* <Route path={ROUTES.NEWS.ROUTE} exact component={News} /> */}
          <Route path={ROUTES.PLAYER_STATS.ROUTE} exact component={PlayerStats} />
        </Switch>
      </App>
    </Router>
  );
};

export { RouterContainer };
