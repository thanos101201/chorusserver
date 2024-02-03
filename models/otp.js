const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    otpNum : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    }
});

const otpModel = mongoose.model('Otp', otpSchema);

module.exports = otpModel;