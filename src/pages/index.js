import React from 'react';

export default {
  Home: React.lazy(() => import('./Home')),
  NotFound: React.lazy(() => import('./NotFound')),
};
