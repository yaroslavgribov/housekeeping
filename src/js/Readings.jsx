import React from 'react';

export default () => {
  return (
    <form name="readings" id="readings">
      <fieldset>
        <legend>Показания всяких счетчиков: </legend>
        <div className="form-control">
          <label htmlFor="coldWater">Холодная водица: </label>
          <input id="coldWater" type="text" placeholder="Холодная вода" />
        </div>
        <div className="form-control">
          <label htmlFor="hotWater">Горячая водица: </label>
          <input id="hotWater" type="text" placeholder="Горячая водица" />
        </div>
        <div className="form-control">
          <label htmlFor="electricityDay">Электричество день: </label>
          <input
            id="electricityDay"
            type="text"
            placeholder="Электричество день"
          />
        </div>
        <div className="form-control">
          <label htmlFor="electricityNight">Электричество ночь: </label>
          <input
            id="electricityNight"
            type="text"
            placeholder="Электричество ночь"
          />
        </div>
        <button type="submit">Посчитать!</button>
      </fieldset>
    </form>
  );
};
