const request = require('request');

const forecast = (latitude, longitude, callback) => {
  forecastURL = `https://api.darksky.net/forecast/069a64a72d369e5f25b3cd5151a4042f/${latitude},${longitude}`;
  request({ url: forecastURL, json: true }, (error, response) => {
  	if (error) {
  	  callback('Unable to connect to weather service!', undefined);
  	} else if (response.body.error) {
  	  callback('Unable to find weather data for this location!', undefined);
  	} else {
  	  const temperature = response.body.currently.temperature;
  	  const precipProbability = response.body.currently.precipProbability;
  	  const summary = response.body.daily.data[0].summary;
  	  callback(undefined, `${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
  	}
  });
};

module.exports = forecast;