import React from 'react';
import logo from './logo.svg';
import { Form } from './features/form/FormUsingToolkit';
import './App.css';
import FormUseState from './hooks/formUseState';
import FormUseReducer from './hooks/FormUseReducer/formUseReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <strong><em>Form using Redux Toolkit</em></strong>
        
        <Form />
        <br></br>
        <br></br>
        <strong><em>Form using useState hook</em></strong> 
        <FormUseState /> 
        <br></br>
        <br></br>
        <strong><em>Form using useReducer hook</em></strong>
        <FormUseReducer />
        <br></br>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
