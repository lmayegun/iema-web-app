import React from 'react';
import {Container} from 'react-bootstrap';
import {AppContextConsumer} from '../AppContext';
import {renderRoutes} from 'react-router-config';
import {ThemeProvider} from 'styled-components';
import {appTheme} from '../configs/appTheme';
import Page from './Page'
import StyledHeaderWrapper from './HeaderWrapper'


const MainLayout: React.FC = ()=>{
    return(
        <AppContextConsumer>
        {
           (routes) => {
               return(
                    <ThemeProvider theme={appTheme}>
                        <Container>
                            <Page>
                                <StyledHeaderWrapper />
                                {renderRoutes(routes!.routes)}
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