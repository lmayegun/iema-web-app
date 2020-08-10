import React from 'react';
export const NodesConfig: any = {
  settings: {
      layout: {
          config: {}
      }
  },
  routes: [
      {
          exact    : true,
          path     : '/gin',
          component: React.lazy(() => import('./frontPage/FrontPage2')),
      },
      {
          path     : '/',
          component: React.lazy(() => import('./frontPage/FrontPage')),
      }
  ]
};