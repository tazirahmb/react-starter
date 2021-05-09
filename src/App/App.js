import React from 'react';
import Pages from '~/pages';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from '~/configs';

export default function App() {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME()}>
        <Pages.Home />
      </Route>
      <Route path="*">
        <Pages.NotFound />
      </Route>
    </Switch>
  );
}
