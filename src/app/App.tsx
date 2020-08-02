import React from 'react';
import logo from './logo.svg';

import '../styles/App.css';
import '../styles/App.scss';

import ReactRouterConfig from './route-systems/ReactRouterConfig';
import Wrapper from './Wrapper';

import { Button } from 'react-bootstrap';

const App: React.FC = ()=> {
  return (
    <ReactRouterConfig />
  );
}


export default App;
