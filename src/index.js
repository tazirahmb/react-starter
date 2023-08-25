import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from '~/App';
import { AppContainer } from 'react-hot-loader';
import configureStore from './redux/configureStore';
import ErrorBoundary from './pages/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const store = configureStore();

// define root configuration
const Root = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);

const container = document.getElementById('app');
const appRoot = createRoot(container); // createRoot(container!) if you use TypeScript
appRoot.render(
  <AppContainer>
    <Root />
  </AppContainer>,
);

if (module.hot) {
  module.hot.accept(Root, () => {
    const NewRoot = Root;
    appRoot.render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
    );
  });
}
