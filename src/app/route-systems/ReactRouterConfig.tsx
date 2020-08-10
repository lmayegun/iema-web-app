import React from 'react';
import {withRouter} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import appsConfig from 'src/app/configs/appsConfig'

const ReactRouterConfig: React.FC = ()=>{
    return(
        <>
            <BrowserRouter>{renderRoutes(appsConfig.iemaRoutesConfig)}</BrowserRouter>,
        </>
    );
};

export default withRouter(ReactRouterConfig);