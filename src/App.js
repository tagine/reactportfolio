import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from 'semantic-ui-react';
import Contactform from "./components/Contactform.jsx";
import Nav from "./components/Nav.jsx";


function App() {
  return (
    <div className="App">
     
      <Header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Nav/>
        </p>
        <Contactform/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </div>
  );
}

export default App;
