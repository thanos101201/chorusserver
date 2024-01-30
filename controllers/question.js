const express = require('express');
const get = require('../routers/question/get');
const getList = require('../routers/question/getList');
const post = require('../routers/question/post');
const deleteQuestion = require('../routers/question/delete');

const router = express.Router();

router.get('/', (req, res) => {
    get(req, res);
});

router.get('/list', (req, res) => {
    getList(req, res);
});

router.post('/', (req, res) => {
    post(req, res);
});

router.delete('/', (req, res) => {
    deleteQuestion(req, res);
})

module.exports = router;