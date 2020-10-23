import React, {Suspense} from 'react';
import {Container} from 'react-bootstrap';
import {renderRoutes, RouteConfigComponentProps} from 'react-router-config';
import {ThemeProvider} from 'styled-components';

import { appTheme } from '../configs/appTheme';
import { HeaderWrapper } from './Header';
import { FooterWrapper } from './Footer';
import Scroller from './Scroller';

const AppWrapper = ({ route }: RouteConfigComponentProps) => {
    return(
        <ThemeProvider theme={appTheme}>
            <Container>
                <HeaderWrapper /> 
            </Container>
            <Scroller getScrollTop={ (scrollTop = 900)=> null }>
                <Suspense fallback={<h1>Loading profile...</h1>}>
                    {renderRoutes(route!.routes)}
                </Suspense>

                <FooterWrapper/> 
            </Scroller> 
        </ThemeProvider>
    );
};

export default AppWrapper;