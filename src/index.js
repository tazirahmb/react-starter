import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
