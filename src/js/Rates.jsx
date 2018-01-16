import React from 'react';

const Rates = () => {
  return (
    <form name="rates" id="rates">
      <fieldset>
        <legend>Тарифы: </legend>
        <div className="frm-control">
          <label htmlFor="coldWaterRate">Холодная водица: </label>
          <input id="coldWaterRate" type="text" placeholder="Холодная вода" />
        </div>
        <div className="form-control">
          <label htmlFor="hotWaterRate">Горячая водица: </label>
          <input id="hotWaterRate" type="text" placeholder="Горячая водица" />
        </div>
        <div className="form-control">
          <label htmlFor="electricityDayRate">Электричество день: </label>
          <input
            id="electricityDayRate"
            type="text"
            placeholder="Электричество день"
          />
        </div>
        <div className="form-control">
          <label htmlFor="electricityNightRate">Электричество ночь: </label>
          <input
            id="electricityNightRate"
            type="text"
            placeholder="Электричество ночь"
          />
        </div>
        <button id="saveRates" type="submit">
          Сохранить!
        </button>
      </fieldset>
    </form>
  );
};

export default Rates;
