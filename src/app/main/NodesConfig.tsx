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
          exact     : true,
          path      : '/topic/:topic',
          component : React.lazy(() => import('./topicsPage/Topics')),
      }, 
      {
        exact     : true,
        path      : '/topic/tags/:tags',
        component : React.lazy(() => import('./topicsPage/Tags')),
    }, 
      {
          path      : '/article/:id',
          component : React.lazy(() => import('./article/Article')), 
      }
  ]
};