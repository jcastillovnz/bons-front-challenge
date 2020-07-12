import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Welcome, Login, BoardContainer } from './views'
import { isLoggedIn } from './store/selector'
import './App.css';

function App(props): JSX.Element {
  const isLogged = useSelector(isLoggedIn);
  const PrivateRoute = (props): JSX.Element => (
    <Fragment>
      {isLogged ? props.children : <Redirect to="/login" />}
    </Fragment>
  )

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/login" component={Login} />
        <PrivateRoute>
          <Route exact path="/Board" {...props} component={BoardContainer}/>
        </PrivateRoute>

      </Switch>
    </Router>
  );
}
export default App;
