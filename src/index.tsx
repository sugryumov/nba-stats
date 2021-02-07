import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { store } from 'store';
import Spinner from 'common/components/Spinner';

dayjs.extend(utc);
dayjs.extend(timezone);

const LazyRouter = lazy(() =>
  import('./containers/Router').then(({ RouterContainer }) => ({
    default: RouterContainer,
  })),
);

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <LazyRouter />
    </Suspense>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

serviceWorkerRegistration.register();

reportWebVitals();
