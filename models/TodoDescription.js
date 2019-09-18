const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoDescriptionSchema = new Schema({
    tag: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    levée: {
        type: String,
    },
    compost: {
        type: String,
    },
    semis: {
        type: String,
    },
    plantation: {
        type: String,
    },
    entretien: {
        type: String,
    },
    recolte: {
        type: String,
    },
});

const TodoDescription = mongoose.model('TodoDescription', TodoDescriptionSchema);

module.exports = TodoDescription;