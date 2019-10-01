const request = require('request');
const geocode = require('./utils/geocode');

geocode('Alexandria', (error, data) => {
  console.log(error);
  console.log(data);
});