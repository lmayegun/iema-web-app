import React from 'react';
import {Router} from 'react-router';

import routes from './configs/routesConfig';
import {AppContextProvider} from './AppContext';
import history from '../@history';

import '../styles/App.css';
import '../styles/App.scss';

import {ReactRouterConfig} from './route-systems';

const App: React.FC = ()=> {
  return (
    <AppContextProvider value={{routes}}>
      <Router history={history}>
        <ReactRouterConfig />
      </Router>
    </AppContextProvider>
  );
};


export default App;
