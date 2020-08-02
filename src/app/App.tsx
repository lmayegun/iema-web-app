import React from 'react';

import routes from './configs/routesConfig';

import '../styles/App.css';
import '../styles/App.scss';

import {ReactRouterConfig} from './route-systems';

const App: React.FC = ()=> {
  console.log(routes);
  return (
    <ReactRouterConfig />
  );
};


export default App;
