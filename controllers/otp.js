const express = require('express');
const router = express.Router();
const get = require('../routers/otp/get');
const verify = require('../routers/otp/verify');

router.get('/', (req, res) => {
    get(req, res);
})

router.post('/', (req, res) => {
    verify(req, res);
})

module.exports = router;