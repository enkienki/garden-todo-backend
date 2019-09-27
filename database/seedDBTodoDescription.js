const mongoose = require('mongoose')
const TodoDescription = require('../models/TodoDescription')

const todoDescription = require('./TodoDescription')

const seedDBTodoDescription = () => {
    TodoDescription.deleteMany({}, (err) => {
        err ? console.log(err)
            :
            console.log("removed TodoDescription");
        todoDescription.map((seed) => {
            TodoDescription.create(seed, (err, todo) => {
                err ? console.log(err)
                    :
                    console.log("added TodoDescription");
            }
            );
        });
    });
}

module.exports = seedDBTodoDescription