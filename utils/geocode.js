const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicnlhbndvbmcxOCIsImEiOiJja21qODV0eGUwa2pyMnZuejZwOWZ1bmI2In0.LJHr07LMOjjVjzLxPY3CUA&limit=1`;

    request({ url, json: true}, (error, response) => {
        const [ longitude, latitude ] = response.body.features[0].center;
        const location = response.body.features[0].place_name;
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined);
        } else {
            callback(undefined, {
                latitude,
                longitude,
                location
            })
        }
    })
}

module.exports = geocode;