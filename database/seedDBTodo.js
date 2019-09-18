const mongoose = require('mongoose')
const Todo = require('../models/Todo')

const data = [
    {
        title: "Miretur si consilio deverti velut",
        tag: "ail",
        weekNum: 36,
    },
    {
        title: "Sospitales Aethiopia medentur quae nobilitat",
        tag: "arroche",
        weekNum: 36,
    },
    {
        title: "Velut quas et e dicerentur",
        tag: "artichaut",
        weekNum: 36,
    },
    {
        title: "Miretur si consilio deverti velut",
        tag: "engrais vert",
        weekNum: 50,
    },
    {
        title: "Sospitales Aethiopia medentur quae nobilitat",
        tag: "engrais vert",
        weekNum: 50,
    },
    {
        title: "Miretur si consilio deverti velut",
        tag: "engrais vert",
        weekNum: 12,
    },
    {
        title: "Sospitales Aethiopia medentur quae nobilitat",
        tag: "engrais vert",
        weekNum: 12,
    },
    {
        title: "Sospitales Aethiopia medentur quae nobilitat",
        tag: "tomate",
        weekNum: 3,
    },
    {
        title: "Velut quas et e dicerentur",
        tag: "tomate",
        weekNum: 3,
    },
    {
        title: "Sospitales Aethiopia medentur quae nobilitat",
        tag: "tomate",
        weekNum: 3,
    },
]

const seedDBTodo = () => {
    Todo.deleteMany({}, (err) => {
        err ? console.log(err)
        :
        console.log("removed Todos!");
        data.map((seed) => {
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