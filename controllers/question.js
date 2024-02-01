const express = require('express');
const get = require('../routers/question/get');
const getList = require('../routers/question/getList');
const post = require('../routers/question/post');
const deleteQuestion = require('../routers/question/delete');
const agreement = require('../routers/question/agreement');
const getAll = require('../routers/question/getAll');

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
});

router.post('/aggreement', (req, res) => {
    agreement(req, res);
});

router.get('/all', (req, res) => {
    getAll(req, res);
})

module.exports = router;