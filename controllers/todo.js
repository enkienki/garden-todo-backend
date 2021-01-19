const mongosse = require("mongoose");
const Todo = require("../models/Todo");

const moment = require("moment");

const weekNum = (moment().month() + 1) * 2;

const handleTodo = (req, res) => {
  const query = Todo.find({ weekNum: weekNum });
  query.find((err, todo) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, todo: todo });
  });
};

module.exports = handleTodo;
