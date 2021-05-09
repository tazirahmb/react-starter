import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory } from 'history';
import ErrorBoundary from './pages/ErrorBoundary';
import { Router } from 'react-router';

const history = createBrowserHistory();

// define root configuration
const Root = () => (
  <ErrorBoundary>
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </Router>
  </ErrorBoundary>
);

// render and hot reload plugin
render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept(Root, () => {
    const NewRoot = Root;
    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
