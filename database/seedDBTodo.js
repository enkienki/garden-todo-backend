const mongoose = require('mongoose')
const Todo = require('../models/Todo')

const todos = require("./Todo")

const seedDBTodo = () => {
    Todo.deleteMany({}, (err) => {
        err ? console.log(err)
        :
        console.log("removed Todos!");
        todos.map((seed) => {
            Todo.create(seed, (err, todo) => {
                err ? console.log(err)
                    :
                    console.log("added Todos");
            }
            );
        });
    });
}

module.exports = seedDBTodo