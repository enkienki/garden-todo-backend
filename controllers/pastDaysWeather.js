require('dotenv').config()
const fetch = require('node-fetch');

const APIKEYDARKSKY = process.env.DARK_SKY_KEY;

// fetch PAST weatherForecast from DARKSKY API for the last 7 days
const getPastTimeWeather = (req, res) => {
  const lat = req.params.lat
  const long = req.params.long
  const pastDays = req.params.pastdays
  fetch(
    `https://api.darksky.net/forecast/${APIKEYDARKSKY}/${lat},${long},${pastDays}?exclude=currently,minutely,hourly,flags&lang=fr&units=si`
  )
    .then(response => response.json())
    .then(response => res.send(response))
}

module.exports = getPastTimeWeather
