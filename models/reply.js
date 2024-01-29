const mongoose = require('mongoose');

const replySchema = mongoose.Schema({
    
});

const replyModel = mongoose.model('Reply', replySchema);

module.exports = replyModel;