import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import firebase from 'firebase';
import Rates from './Rates';
import Auth from './Auth';
import Readings from './Readings';
import connection, { auth } from '../connection';
import Dashboard from './Dashboard';
import Header from './Header'

class Application extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log('currentUser is => ', user)
      this.setState({ user })
    })
  }

  signOut = () => {
    auth.signOut()
      .then(() => {
        console.log('bye')
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { user } = this.state

    return (
      <BrowserRouter>
        <main>
          { user && <Header user={user} signOut={this.signOut}/> }
          <Route path="/" exact render={() => this.state.user ? <Redirect to="/dashboard" /> : <Auth /> } />
          <Route path="/dashboard" render={() => this.state.user ? <Dashboard /> : <Auth />} />
          <Route path="/readings" component={Readings} />
        </main>
      </BrowserRouter>
    );
  }
}

export default Application;
