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
    }
});

const questionModel = mongoose.model('Question', questionSchema);

module.exports = questionModel;