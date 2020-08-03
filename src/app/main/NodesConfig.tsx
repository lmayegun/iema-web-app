import React from 'react';
import {RouteConfig} from 'react-router-config';

type NodeConfigType = {
    settings: any,
    routes: RouteConfig[]
}

export const NodesConfig: NodeConfigType = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            exact    : true,
            path     : '/',
            component: React.lazy(() => import('./frontPage/FrontPage'))
        },
    ]
};
