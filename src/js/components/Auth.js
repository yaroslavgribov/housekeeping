import React, { Component } from 'react';
import firebase from 'firebase';

import connection, { auth } from '../connection';


class Auth extends Component {
  state = {
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log({ email: email.value, pass: password.value });
    auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
          auth
          .signInWithEmailAndPassword(email.value, password.value)
          .then(response => {
            console.log(connection.auth().currentUser);
          })
          .catch(error => {
            this.setState({
              error: error
            });
          });
      });
  };

  render() {
    return (
      <div>
        <form className="form login-form" onSubmit={this.handleSubmit}>
          <h2>Привет! Для начала - введи почту и пароль!</h2>
          <label>
            E-mail:
            <input type="email" name="email" className="form-control"/>
          </label>
          <label>
            Password:
            <input type="password" name="password" className="form-control" />
          </label>
          <button type="submit" className="button">LOGIN</button>
          {
            this.state.error && (
              <div className="form-errors">
                status: {this.state.error.code}
                message: {this.state.error.message}
              </div>
            )
          }
        </form>
      </div>
    );
  }
}

export default Auth;
