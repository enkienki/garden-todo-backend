const fetch = require('node-fetch');
const APIKEYDARKSKY = process.env.DARK_SKY_KEY;

// fetch weatherForecast from DARKSKY API for the next 7 days
const getWeatherForecast = (req, res) => {
  const lat = req.params.lat
  const long = req.params.long
  fetch(
    `https://api.darksky.net/forecast/${APIKEYDARKSKY}/${lat},${long}?exclude=minutely,flags&lang=fr&units=si`
  )
    .then(response => response.json())
    .then(response => res.send(response))
}

module.exports = getWeatherForecast