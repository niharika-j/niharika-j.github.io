import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavbarComponent from './components/navbar/navbar';
import FooterComponent from './components/footer/footer';

import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <NavbarComponent/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
