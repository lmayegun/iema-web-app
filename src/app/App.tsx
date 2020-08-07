import React from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';

import routes from './configs/routesConfig';
import {AppContextProvider} from './AppContext';
import history from '../@history';
import store from './store';

import '../styles/App.css';
import '../styles/App.scss';

import {ReactRouterConfig} from './route-systems';

const App: React.FC = ()=> {

  return (
    <AppContextProvider value={{routes}}>
      <Provider store={store}>
        <Router history={history}>
          <ReactRouterConfig />
        </Router>
      </Provider>
    </AppContextProvider>
  );
};


export default App;
