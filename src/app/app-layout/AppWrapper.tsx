import React, {Suspense} from 'react';
import {Container} from 'react-bootstrap';
import {renderRoutes, RouteConfigComponentProps} from 'react-router-config';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components';

import {appTheme} from '../configs/appTheme';
import Page from './Page'
import { HeaderWrapper } from './Header'

const AppWrapper = ({ route }: RouteConfigComponentProps) => {
    return(
        <ThemeProvider theme={appTheme}>
            <Container bsPrefix={`container page-wrapper`}>
                <Page>
                    <HeaderWrapper />
                    <Suspense fallback={<h1>Loading profile...</h1>}>
                        <MainContainer>
                            {renderRoutes(route!.routes)}
                        </MainContainer>
                    </Suspense>   
                </Page>
            </Container>
        </ThemeProvider>
    );
};

const MainContainer = styled.div`
    padding-top: 180px;
`;

export default AppWrapper;