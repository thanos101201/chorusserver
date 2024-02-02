const mongoose = require('mongoose');

const workingHistorySchema = mongoose.Schema({
    questionId : {
        type: String
    },
    chat: {
        type: Array
    },
    users: {
        type: Array,
        default: []
    }
});

const workingHistoryModel = mongoose.model('WorkingHistory', workingHistorySchema);

module.exports = workingHistoryModel;