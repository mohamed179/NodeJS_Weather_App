const request = require('request');


// Getting the geographic coordinates of a location

const geoCodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Alexandria.json?access_token=pk.eyJ1IjoibW9oYW1lZDE3OSIsImEiOiJjazE2N2ZsaDIwNjNwM2Jtcmd5NG02ZzBrIn0.Di-GRInDqUsV0lj1Gt3SsQ&limit=1';

request({ url: geoCodingURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(`latitude = ${latitude}, longitude = ${longitude}`);
});


// Getting the forcast information for this location

const forcastURL = 'https://api.darksky.net/forecast/069a64a72d369e5f25b3cd5151a4042f/37.8267,-122.4233?lang=zh';

request({ url: forcastURL, json: true }, (error, response) => {
  const temperature = response.body.currently.temperature;
  const precipProbability = response.body.currently.precipProbability;
  console.log(`${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`);
});