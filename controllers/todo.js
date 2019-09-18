const mongosse = require('mongoose')
const Todo = require('../models/Todo')

const handleTodo = (req, res) => {
  Todo.find((err, todo) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, todo: todo });
  });
}

module.exports = handleTodo