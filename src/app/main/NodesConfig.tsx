import React from 'react';
import {RouteConfig} from 'react-router-config';

import {FrontPage} from './frontPage';
// import {authRoles} from 'app/auth'

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
