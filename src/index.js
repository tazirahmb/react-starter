import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';

const Root = () => <App />;

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
