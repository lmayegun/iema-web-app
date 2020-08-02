import React from 'react';
import logo from './logo.svg';

import '../styles/App.css';
import Wrapper from './Wrapper';
import { Button } from 'react-bootstrap';

const App: React.FC = ()=> {
  return (
    <div className="App">
      <Wrapper>
        How long have you been smiling?
        <Button> gaga </Button>
      </Wrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
