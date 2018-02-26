import React, {Component} from 'react'
import connection, { db } from '../connection'
import ReadonlyRates from './ReadonlyRates'
import Readings from './Readings'
import Payments from './Payments'

class Dashboard extends Component {
  state = {
    rates: {},
    readings: {}
  }

  componentDidMount() {
    db
      .ref('/rates')
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val())
        this.setState({ rates: snapshot.val() })
      })
  }

  render() {
    const { 
      rates
    } = this.state

    return (
      <div>
      { Object.keys(rates).length > 0 && <ReadonlyRates {...rates} /> }
      <Readings />
      { Object.keys(rates).length > 0 && <Payments rates={rates}/> }
      </div>
    )
  }
}

export default Dashboard