// // utility function to get initial rates either from LS or just an empty object
// const getInitialRates = () => {
//   const rates = localStorage.getItem("rates");

//   if (rates) return JSON.parse(rates);
//   else
//     return {
//       water: {
//         cold: 0,
//         hot: 0
//       },
//       electricity: {
//         day: 0,
//         night: 0
//       }
//     };
// };

// // get elements from form
// const ratesForm = document.querySelector("#rates");
// const electricityDayRateEl = ratesForm.querySelector("#electricityDayRate");
// const electricityNightRateEl = ratesForm.querySelector("#electricityNightRate");
// const coldWaterRateEl = ratesForm.querySelector("#coldWaterRate");
// const hotWaterRateEl = ratesForm.querySelector("#hotWaterRate");
// const saveRatesEl = ratesForm.querySelector("#saveRates");

// // set elements values according to initial values
// const initialRates = getInitialRates();
// electricityDayRateEl.value = initialRates.electricity.day;
// electricityNightRateEl.value = initialRates.electricity.night;
// coldWaterRateEl.value = initialRates.water.cold;
// hotWaterRateEl.value = initialRates.water.hot;

// // add listeners for later
// electricityDayRateEl.addEventListener("keyup", e => {
//   console.log(e.target.value);
// });

// electricityNightRateEl.addEventListener("keyup", e => {
//   console.log(e.target.value);
// });

// coldWaterRateEl.addEventListener("keyup", e => {
//   console.log(e.target.value);
// });

// hotWaterRateEl.addEventListener("keyup", e => {
//   console.log(e.target.value);
// });

// ratesForm.addEventListener("submit", e => {
//   e.preventDefault();

//   const coldWater = +coldWaterRateEl.value;
//   const hotWater = +hotWaterRateEl.value;
//   const electricityDay = +electricityDayRateEl.value;
//   const electricityNight = +electricityNightRateEl.value;

//   if (!coldWater || !hotWater || !electricityDay || !electricityNight) return;
//   else {
//     const initialRates = getInitialRates();

//     const rates = {
//       ...initialRates,
//       water: {
//         ...initialRates.water,
//         cold: coldWater,
//         hot: hotWater
//       },
//       electricity: {
//         ...initialRates.electricity,
//         day: electricityDay,
//         night: electricityNight
//       }
//     };

//     localStorage.setItem("rates", JSON.stringify(rates));

//     console.log(rates);
//   }
// });

// // get elements from form
// const readings = document.querySelector("#readings");
// const electricityDayEl = readings.querySelector("#electricityDay");
// const electricityNightEl = readings.querySelector("#electricityNight");
// const coldWaterEl = readings.querySelector("#coldWater");
// const hotWaterEl = readings.querySelector("#hotWater");

// readings.addEventListener("submit", e => {
//   e.preventDefault();

//   const coldWater = +coldWaterEl.value;
//   const hotWater = +hotWaterEl.value;
//   const electricityDay = +electricityDayEl.value;
//   const electricityNight = +electricityNightEl.value;
//   const rates = getInitialRates();

//   if (!coldWater || !hotWater || !electricityDay || !electricityNight) return;
//   else {
//     const result = {
//       water: {
//         cold: coldWater * rates.water.cold,
//         hot: hotWater * rates.water.hot
//       },
//       electricity: {
//         day: electricityDay * rates.electricity.day,
//         night: electricityNight * rates.electricity.night
//       }
//     };

//     const keys = Object.keys(result);

//     const res = keys.reduce((acc, k) => {
//       return (acc += Object.keys(result[k]).reduce((acc2, key2, id, self) => {
//         return (acc2 += result[k][key2]);
//       }, 0));
//     }, 0);

//     const currentTotal = document.querySelector("#currentTotal");
//     currentTotal.innerText = Math.ceil(res);
//   }
// });
