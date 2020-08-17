import React from 'react';
export const NodesConfig: any = {
  settings: {
      layout: {
          config: {}
      }
  },
  routes: [
      {
          exact     : true,
          path      : '/',
          component : React.lazy(() => import('./frontPage/FrontPage')),
      },
      {
          path      : '/topic/:topic',
          component : React.lazy(() => import('./topicsPage/Topics')),
      }, 
      {
          path      : '/article/:id',
          component : React.lazy(() => import('./Article')), 
      }
  ]
};