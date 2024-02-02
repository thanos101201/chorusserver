const express = require('express');
const get = require('../routers/workingHistory/get');
const post = require('../routers/workingHistory/post');
const like = require('../routers/workingHistory/like');
const dislike = require('../routers/workingHistory/dislike');
const reward = require('../routers/workingHistory/reward');
const joinHistory = require('../routers/workingHistory/joinHistory');

const router = express.Router();


router.get('/', (req, res) => {
    get(req, res);
});

router.post('/', (req, res) => {
    post(req, res);
});

router.post('/like', (req, res) => {
    like(req, res);
});

router.post('/dislike', (req, res) => {
    dislike(req, res);
});

router.post('/reward', (req, res) => {
    reward(req, res);
});

router.post('/join', (req, res) => {
    joinHistory(req, res);
});

module.exports = router;