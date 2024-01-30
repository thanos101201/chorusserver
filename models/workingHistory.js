const mongoose = require('mongoose');

const workingHistorySchema = mongoose.Schema({
    questionId : {
        type: String
    },
    chat: {
        type: Array
    }
});

const workingHistoryModel = mongoose.model('WorkingHistory', workingHistorySchema);

module.exports = workingHistoryModel;