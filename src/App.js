import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Header } from "semantic-ui-react";
// import Contactform from "./components/Contactform.jsx";
import Nav from "./components/Nav.jsx";
import Portfolio from "../src/components/Portfolio";
import About from "../src/components/About";
import Contactform from "../src/components/Contactform";
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
      <logo></logo>
      <Nav/>
      <Route exact path="/" component={About}/>
      <Route exact path="/Portfolio" component={Portfolio}/>
      <Route exact path="/Contact" component={Contactform}/>
    </div>
    </Router>
  );
}

export default App;
