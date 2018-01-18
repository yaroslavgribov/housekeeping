import React, { Component } from 'react';
import firebase from 'firebase';
import Rates from './Rates';
import Auth from './Auth';
import Readings from './Readings';
import connection from '../connection';

class Application extends Component {
  componentDidMount() {
    firebase
      

    connection
      .database()
      .ref('/rates')
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val(), typeof snapshot.val());
      });
  }

  render() {
    return (
      <div>
        <h1>Hello Everyone!</h1>
        <Auth />
        <Rates />
        <Readings />
      </div>
    );
  }
}

export default Application;
