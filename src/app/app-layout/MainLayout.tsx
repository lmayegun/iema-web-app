import React from 'react';
import {Container} from 'react-bootstrap';
import {AppContextConsumer} from '../AppContext';
import {renderRoutes} from 'react-router-config';

const MainLayout: React.FC = ()=>{
    return(
        <AppContextConsumer>
        {
           (routes) => {
               return(
                    <Container>
                        <h1>
                            MainLayout
                        </h1>
                        {renderRoutes(routes!.routes)}
                    </Container>
               );
           }
        }
        </AppContextConsumer>
    )
};

export default MainLayout;