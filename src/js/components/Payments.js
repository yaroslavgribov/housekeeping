import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { db } from '../connection'

class Payments extends Component {
  state = {
    payments: {},
    readings: {}
  }

  componentDidMount() {
    const { rates } = this.props

    const fetchPayments = db
      .ref('/payments')
      .once('value')
      .then(snapshot => snapshot.val())

    const fetchReadings = db  
      .ref('/readings')
      .once('value')
      .then(snapshot => snapshot.val())
      
    Promise.all([fetchPayments, fetchReadings])
      .then(([payments, readings]) => {
        const calculatedPayments = Object.keys(payments).map(date => {
          const reading = readings[date].readings
          const payment = Object.keys(reading).reduce((sum, readingKey) => {
            return sum += Object.keys(reading[readingKey]).reduce((innerSum, readingExactKey) => { // day
              return innerSum += Math.floor(
                reading[readingKey][readingExactKey] * rates[readingKey][readingExactKey]
              )
            }, 0) // electricity
          }, 0)

          return { date, payment }
        })

        console.log((calculatedPayments))

        this.setState({
          calculatedPayments: calculatedPayments,
          payments, readings
        })
      })
  }

  render() {
    const { calculatedPayments } = this.state

    return (
      <div>
        Payments:
        { calculatedPayments && calculatedPayments.map(({ date, payment }) => {
          return (
            <div key={date}>
              {date} : {payment}
            </div>
          )
        })}
      </div>
    )
  }
}

Payments.propTypes = {
  rates: PropTypes.object.isRequired
}


export default Payments