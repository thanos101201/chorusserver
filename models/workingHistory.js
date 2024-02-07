const mongoose = require('mongoose');

const workingHistorySchema = mongoose.Schema({
    questionId : {
        type: String,
        required: true
    },
    replyId: {
        type: String,
        required: true,
        unique: true
    },
    replyText: {
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
    email: {
        type: String,
        required: true
    }
});

const workingHistoryModel = mongoose.model('WorkingHistory', workingHistorySchema);

module.exports = workingHistoryModel;