const mongosse = require("mongoose");
const TodoDescription = require("../models/TodoDescription");

const handleTodoDescription = (req, res) => {
  const query = TodoDescription.where({ tag: req.params.tag });
  query.findOne((err, description) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, description: description });
  });
};

module.exports = handleTodoDescription;
