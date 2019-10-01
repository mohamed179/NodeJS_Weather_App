const request = require('request');

const geocode = (address, callback) => {
  const geoCodingURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibW9oYW1lZDE3OSIsImEiOiJjazE2N2ZsaDIwNjNwM2Jtcmd5NG02ZzBrIn0.Di-GRInDqUsV0lj1Gt3SsQ&limit=1`;
  request({ url: geoCodingURL, json: true }, (error, response) => {
    if (error) {
  	  callback('Unable to connect to weather service!', undefined);
    } else if (response.body.features.length === 0) {
  	  callback('Unable to find location! try another search', undefined);
    } else { 
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0]
      });
    }
  });
};

module.exports = geocode;