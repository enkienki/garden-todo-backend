const mongoose = require('mongoose')
const TodoDescription = require('../models/TodoDescription')

import { data } from './database/TodoDescription'

const seedDBTodoDescription = () => {
    TodoDescription.deleteMany({}, (err) => {
        err ? console.log(err)
            :
            console.log("removed TodoDescription");
        data.map((seed) => {
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