import React from 'react';
import {RouteConfig} from 'react-router-config';
// import {authRoles} from 'app/auth'

type NodeConfigType = {
    settings: any,
    routes: RouteConfig[]
}

const GrandChild = () => (
    <div>
        <h3>Grand Child</h3>
    </div>
);

const GrandChild2 = () => (
    <div>
        <h3>Grand Child Trigger</h3>
    </div>
);

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
            component: GrandChild
        },
        {
            exact    : true,
            path     : '/a',
            component: GrandChild2
        }
    ]
};
