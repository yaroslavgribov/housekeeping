import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import connection from '../connection';
import Dashboard from './Dashboard';
import ReadonlyRates from './ReadonlyRates';
import EditableRates from './EditableRates';

class Rates extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dashboard" exact render={() => {
          return (
             <Dashboard />
          )
        }} />
        <Route path="/dashboard/edit" render={() => <EditableRates handleSubmit={this.handleSubmit} />} />
      </Switch>
    );
  }
}

export default Rates;
