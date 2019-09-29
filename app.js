const request = require('request');

// const url = 'https://api.darksky.net/forecast/069a64a72d369e5f25b3cd5151a4042f/37.8267,-122.4233?exclude=minutely,hourly,daily';
const url = 'https://api.darksky.net/forecast/069a64a72d369e5f25b3cd5151a4042f/37.8267,-122.4233?lang=zh';

request({ url: url, json: true }, (error, response) => {
  const temperature = response.body.currently.temperature;
  const precipProbability = response.body.currently.precipProbability;
  console.log(`${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
});