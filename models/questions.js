const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    upVotes: {
        type: Array,
        default : []
    },
    downVotes: {
        type: Array,
        default : []
    },
    workingHistory: {
        type: String
    },
    reply : {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const questionModel = mongoose.model('Question', questionSchema);

module.exports = questionModel;