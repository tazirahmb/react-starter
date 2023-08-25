import React from 'react';
import Pages from '~/pages';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '~/configs';

export default function App() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME()} element={<Pages.Home />}/>
      <Route path="*" element={        <Pages.NotFound />}/>
    </Routes>
  );
}
