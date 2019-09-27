const fetch = require('node-fetch');
const MAPBOX_KEY = process.env.MAPBOX_KEY;

// fetch weatherForecast from DARKSKY API for the next 7 days
const getCityCoordinates = (req, res) => {
  const userInput = req.params.userinput
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=${MAPBOX_KEY}&cachebuster=1567963625514&autocomplete=true&country=fr&types=place&limit=3`
  )
    .then(response => response.json())
    .then(response => res.send(response))
}

module.exports = getCityCoordinates
