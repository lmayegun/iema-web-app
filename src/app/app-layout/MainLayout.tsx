import React, {Suspense} from 'react';
import {Container} from 'react-bootstrap';
import {renderRoutes} from 'react-router-config';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';

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
                        <Container bsPrefix={`container page-wrapper`}>
                            <Page>
                                <HeaderWrapper />
                                <Suspense fallback={<h1>Loading profile...</h1>}>
                                    <MainContainer>
                                        {renderRoutes(routes!.routes)}
                                    </MainContainer>
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

const MainContainer = styled.div`
    padding-top: 235px;
`;

export default MainLayout;