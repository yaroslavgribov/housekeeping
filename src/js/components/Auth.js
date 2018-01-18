import React, { Component } from 'react';
import firebase from 'firebase';

import connection from '../connection';

class Auth extends Component {
  state = {
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log({ email: email.value, pass: password.value });
    connection
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        connection
          .auth()
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
        <form onSubmit={this.handleSubmit}>
          <h2>Привет! Для начала - введи почту и пароль!</h2>
          <label>
            E-mail:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Submit</button>
        </form>
        {
          this.state.error && (
            <div>
              status: {this.state.error.code}
              message: {this.state.error.message}
            </div>
          )
        }
      </div>
    );
  }
}

export default Auth;
