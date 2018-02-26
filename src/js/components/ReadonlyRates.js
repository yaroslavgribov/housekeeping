import React from 'react';
import { withRouter, NavLink } from 'react-router-dom'

const EditButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/dashboard/edit') }}
  >
    Ред.
  </button>
))

const ReadonlyRates = ({ water, electricity }) => {
  return (
    <div>
      <h2> Вода </h2>
      <span>Холодная: { water.cold }</span>
      <span>Горячая: { water.hot }</span>
      
      <h2> Электричество </h2>
      <span>День: { electricity.day }</span>
      <span>Ночь: { electricity.night }</span>
      <NavLink to="/dashboard/edit">Ред.</NavLink>
    </div>
  ) 
}

export default ReadonlyRates