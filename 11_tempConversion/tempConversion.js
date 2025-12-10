const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// const convertToCelsius = function(f) {
//    const tempF =((f - 32) * 5 / 9).toFixed(1);
//    return Number(tempF);
// };

// const convertToFahrenheit = function(c) {
//     const tempC = (c * 9 / 5 + 32).toFixed(1);
//     return Number(tempC);
// };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// F to C is (deg - 32) * 5 / 9
// C to F is deg * 9 / 5 + 32
// round to one decimal