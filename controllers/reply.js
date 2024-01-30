const express = require('express');
const get = require('../routers/reply/get');
const getReply = require('../routers/reply/getReply');
const post = require('../routers/reply/post');
const deleteReply = require('../routers/reply/delete');
const like = require('../routers/reply/like');
const dislike = require('../routers/reply/dislike');

const router = express.Router();

router.get('/',(req, res) => {
    get(req, res);
});

router.get('/reply', (req, res) => {
    getReply(req, res);
});

router.post('/', (req, res) => {
    post(req, res);
});

router.delete('/', (req, res) => {
    deleteReply(req, res);
});

router.post('/like', (req, res) => {
    like(req, res);
});

router.post('/dislike', (req, res) => {
    dislike(req, res);
});

module.exports = router;