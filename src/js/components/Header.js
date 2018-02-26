import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  signOut = () => {
    this.props.signOut()
  }

  render() {
    const { user } = this.props

    return (
      <header>
        Hi! {user && user.email}
        <button onClick={this.signOut}>Sign Out</button>
      </header>
    )
  }
} 

Header.propTypes = {
  user: PropTypes.object,

  signOut: PropTypes.func
}

export default Header