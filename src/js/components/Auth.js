import React, { Component } from 'react'
import firebase from 'firebase'

import { auth } from '../connection'

class Auth extends Component {
  state = {
    error: null
  };

  handleSubmit = event => {
    event.preventDefault()
    const { email, password } = event.target.elements

    auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
          auth
          .signInWithEmailAndPassword(email.value, password.value)
          .then(response => {
            console.log(auth.currentUser)
          })
          .catch(error => {
            this.setState({
              error: error
            })
          })
      })
  };

  render() {
    return (
      <form className="form login-form" onSubmit={this.handleSubmit}>
        <h2>Привет! Для начала - введи почту и пароль!</h2>
        <section className="form-group">
          <label className="form-input">
            <span className="label">E-mail: </span>
            <input type="email" name="email" className="form-control"/>
          </label>
        </section>
        <section className="form-group">
          <label className="form-input">
            <span className="label">Password: </span>
            <input type="password" name="password" className="form-control" />
          </label>
        </section>
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
    )
  }
}

export default Auth
