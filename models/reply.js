const mongoose = require('mongoose');

const replySchema = mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    questionId: {
        type: String,
        required: true
    },
    upVotes: {
        type: Array,
        default: []
    },
    downVotes: {
        type: Array,
        default: []
    },
    text: {
        type: String,
        required: true
    }
});

const replyModel = mongoose.model('Reply', replySchema);

module.exports = replyModel;