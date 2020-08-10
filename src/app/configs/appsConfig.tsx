import {RouteConfig} from 'react-router-config';

import AppWrapper from 'src/app/app-layout/AppWrapper'
import routes from 'src/app/configs/routesConfig';

type AppConfig = {
    iemaRoutesConfig: RouteConfig[];
}

const appsConfig: AppConfig = {
    iemaRoutesConfig  : [
        {
            component: AppWrapper,
            routes: routes
        }
    ]
};

export default appsConfig

