const request = require('request');

const url = 'https://api.darksky.net/forecast/069a64a72d369e5f25b3cd5151a4042f/37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const weatherData = JSON.parse(response.body);
  console.log(weatherData.currently);
});