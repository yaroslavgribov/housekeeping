import React, { Component } from 'react';
import { db } from '../connection';
import { date } from '../utils';

class Readings extends Component {
  state = {
    errors: []
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      elements: { coldWater, hotWater, electricityDay, electricityNight }
    } = e.target;

    const readings = {
      water: {
        cold: +coldWater.value,
        hot: +hotWater.value
      },
      electricity: {
        day: +electricityDay.value,
        night: +electricityNight.value
      }
    };

    const errors = Object.keys(readings).reduce((emptyKeys, key) => {
      return emptyKeys.concat(
        Object.keys(readings[key]).reduce((innerEmptyKeys, innerKey) => {
          return readings[key][innerKey] === 0
            ? innerEmptyKeys.concat(`${innerKey}@${key} is Empty`)
            : innerEmptyKeys;
        }, [])
      );
    }, []);

    if (errors) {
      this.setState({ errors });
    } else {
      this.setState({ errors: [] });
    }
    const today = date(new Date());

    db.ref('readings/' + today).set({ readings })
      .then(
        _ => {
          return db.ref('rates').once('value')
        }
      )
      .then(rates => rates.val())
      .then(rates => {
        const payment = Object.keys(readings).reduce((total, key) => {
          return total + (
            Object.keys(readings[key]).reduce((innerTotal, innerKey) => {
              return innerTotal + (readings[key][innerKey] * rates[key][innerKey])
            }, 0)
          );
        }, 0)

        db.ref('payments/' + today).set({ payment })
      });
  };

  render() {
    return (
      <form name="readings" id="readings" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Показания всяких счетчиков: </legend>
          <div className="form-control">
            <label htmlFor="coldWater">Холодная водица: </label>
            <input
              id="coldWater"
              name="coldWater"
              type="text"
              placeholder="Холодная вода"
            />
          </div>
          <div className="form-control">
            <label htmlFor="hotWater">Горячая водица: </label>
            <input
              id="hotWater"
              name="hotWater"
              type="text"
              placeholder="Горячая водица"
            />
          </div>
          <div className="form-control">
            <label htmlFor="electricityDay">Электричество день: </label>
            <input
              id="electricityDay"
              name="electricityDay"
              type="text"
              placeholder="Электричество день"
            />
          </div>
          <div className="form-control">
            <label htmlFor="electricityNight">Электричество ночь: </label>
            <input
              id="electricityNight"
              name="electricityNight"
              type="text"
              placeholder="Электричество ночь"
            />
          </div>
          <button type="submit">Посчитать!</button>
        </fieldset>
        <div className="form-errors">
          {this.state.errors.length !== 0 &&
            this.state.errors.map(error => <div key={error}>{error}</div>)}
        </div>
      </form>
    );
  }
}

export default Readings;
