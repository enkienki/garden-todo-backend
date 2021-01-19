const mongosse = require("mongoose");
const Plant = require("../models/Plants");

const moment = require("moment");

const weekNum = (moment().month() + 1) * 2;

const handlePlants = (req, res) => {
  const query = Plant.find({ weekNum: weekNum });
  query.find((err, plant) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, plant: plant });
  });
};

module.exports = handlePlants;
