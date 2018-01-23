import React, { Component } from 'react';
import {db} from '../connection';

class EditableRates extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const {
      coldWaterRate,
      hotWaterRate,
      electricityDayRate,
      electricityNightRate
    } = e.target.elements;

    const rates = {
      water: {
        cold: +coldWaterRate.value,
        hot: +hotWaterRate.value
      },
      electricity: {
        day: +electricityDayRate.value,
        night: +electricityNightRate.value
      }
    };

    db.ref('rates').set(rates);
  };

  render() {
    return (
      <form name="rates" id="rates" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Тарифы: </legend>
          <div className="form-control">
            <label>
              Холодная водица:
              <input name="coldWaterRate" type="text" placeholder="Холодная вода" />
            </label>
          </div>
          <div className="form-control">
            <label>
              Горячая водица:
              <input name="hotWaterRate" type="text" placeholder="Горячая водица" />
            </label>
          </div>
          <div className="form-control">
            <label>
              Электричество день:
              <input
                name="electricityDayRate"
                type="text"
                placeholder="Электричество день"
              />
            </label>
          </div>
          <div className="form-control">
            <label>
              Электричество ночь:
              <input
                name="electricityNightRate"
                type="text"
                placeholder="Электричество ночь"
              />
            </label>
          </div>
          <button id="saveRates" type="submit">
            Сохранить!
          </button>
        </fieldset>
      </form>
    )
  }
}

export default EditableRates;
