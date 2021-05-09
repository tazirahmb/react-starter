import React, { Suspense } from 'react';
import { render } from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './redux/configureStore';
import ErrorBoundary from './pages/ErrorBoundary';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

const store = configureStore();

// define root configuration
const Root = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </Router>
    </Provider>
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
