import React from 'react';
import {Container} from 'react-bootstrap';
import {AppContextConsumer} from '../AppContext';
import {renderRoutes} from 'react-router-config';
import  styled, {ThemeProvider} from 'styled-components';
import {appTheme} from '../configs/appTheme';

  const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.colors.main};
  border: 2px solid ${props => props.theme.colors.main};
`;


const MainLayout: React.FC = ()=>{
    return(
        <AppContextConsumer>
        {
           (routes) => {
               return(
                    <ThemeProvider theme={appTheme}>
                        <Container>
                            <h1>
                                MainLayout
                            </h1>
                            {renderRoutes(routes!.routes)}
                        </Container>
                    </ThemeProvider>
               );
           }
        }
        </AppContextConsumer>
    )
};

export default MainLayout;