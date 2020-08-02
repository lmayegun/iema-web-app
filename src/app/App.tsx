import React from 'react';

import routes from './configs/routesConfig';
import AppContext from './AppContext';

import '../styles/App.css';
import '../styles/App.scss';

import {ReactRouterConfig} from './route-systems';

const App: React.FC = ()=> {
  return (
    <AppContext.Provider value={{routes}}>
      <ReactRouterConfig />
    </AppContext.Provider>
  );
};


export default App;
