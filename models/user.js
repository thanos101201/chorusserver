const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        default: []
    },
    points: {
        type: Number,
        default: 0
    }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;