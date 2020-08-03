import React, {Suspense} from 'react';
import {Container} from 'react-bootstrap';
import {renderRoutes} from 'react-router-config';
import {ThemeProvider} from 'styled-components';

import {AppContextConsumer} from '../AppContext';
import {appTheme} from '../configs/appTheme';
import Page from './Page'
import { HeaderWrapper } from './Header'


const MainLayout: React.FC = ()=>{
    return(
        <AppContextConsumer>
        {
           (routes) => {
               return(
                    <ThemeProvider theme={appTheme}>
                        <Container style={{background:'white'}}>
                            <Page>
                                <HeaderWrapper />
                                <Suspense fallback={<h1>Loading profile...</h1>}>
                                    {renderRoutes(routes!.routes)}
                                </Suspense>   
                            </Page>
                        </Container>
                    </ThemeProvider>
               );
           }
        }
        </AppContextConsumer>
    )
};

export default MainLayout;