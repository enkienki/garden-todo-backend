const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
  },
  tag: {
    type: Array,
  },
  weekNum: {
    type: Array,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
