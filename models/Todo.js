const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    weekNum: {
        type: Number,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;