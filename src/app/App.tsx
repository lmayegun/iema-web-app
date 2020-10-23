import React from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';

import {AppProvider} from './AppContext';
import history from '../@history';
import store from './store';

import '../styles/App.css';
import '../styles/App.scss';

import {ReactRouterConfig} from './route-systems';

const App: React.FC = ()=> {

  return (
    <AppProvider>
      <Provider store={store}>
        <Router history={history}>
          <ReactRouterConfig />
        </Router>
      </Provider>
    </AppProvider>
  );
};


export default App;
