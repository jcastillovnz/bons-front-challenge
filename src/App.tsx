import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Welcome, Login, BoardContainer} from './views'
import './App.css';

function App(props): JSX.Element {
  return (

    <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route sensitive path="/Board" {...props} component={BoardContainer} />
    </Switch>
  </Router >
  );
}

export default App;
