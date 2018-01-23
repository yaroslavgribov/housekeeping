import React, {Component} from 'react';
import connection from '../connection';
import ReadonlyRates from './ReadonlyRates';
import Readings from './Readings';

class Dashboard extends Component {
  state = {
    rates: {
      water: null,
      electricity: null
    }
  }

  componentDidMount() {
    connection
      .database()
      .ref('/rates')
      .once('value')
      .then(snapshot => {
        this.setState({ rates: snapshot.val() });
      });
  }

  render() {
    const { rates: { water, electricity } } = this.state;

    return (
      <div>
      { water && electricity && <ReadonlyRates water={water} electricity={electricity} /> }
      <Readings />
      </div>
    )
  }
}

export default Dashboard;