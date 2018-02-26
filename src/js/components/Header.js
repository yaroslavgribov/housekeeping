import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Clock from './Clock'

class Header extends Component {
  signOut = () => {
    this.props.signOut()
  }

  render() {
    const { user } = this.props

    return (
      <header className="header">
        <div>
          Hi! {user && user.email}
          <button onClick={this.signOut}>Sign Out</button>
        </div>
        
        <Clock />
      </header>
    )
  }
} 

Header.propTypes = {
  user: PropTypes.object,

  signOut: PropTypes.func
}

export default Header