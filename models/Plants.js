const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  tag: {
    type: String,
  },
  weekNum: {
    type: Array,
  },
});

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;
