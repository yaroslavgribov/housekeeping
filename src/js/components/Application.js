import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';
import Rates from './Rates';
import Auth from './Auth';
import Readings from './Readings';
import connection, { auth } from '../connection';
import Dashboard from './Dashboard';

class Application extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) { 
        this.setState({ user })
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => this.state.user ? <Redirect to="/dashboard" /> : <Auth /> } />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/readings" component={Readings} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Application;
