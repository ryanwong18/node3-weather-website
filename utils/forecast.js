const request = require('request');

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=2bc1b5ae2034e5f9cea8f8f2e9ffe26b&query=${latitude},${longitude}&units=f`;
    
    request({ url, json: true }, (error, response) => {
        const { temperature, feelslike } = response.body.current;
        if (error) {
            callback('Unable to connect to weather service!');
        } else if (response.body.error) {
            callback('Unable to find location!');
        } else {
            callback(undefined, `It is currently ${temperature}. It feels like ${feelslike}`);
        }
    })
}

module.exports = forecast;
