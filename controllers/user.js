const express = require('express');
const login = require('../routers/user/login');
const get = require('../routers/user/get');
const post = require('../routers/user/post');
const deleteUser = require('../routers/user/delete');

const router = express.Router();

router.get('/', (req, res) => {
    get(req, res);
});

router.post('/' ,(req, res) => {
    post(req, res);
});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {
    deleteUser(req, res);
});

router.post('/login',(req, res) => {
    login(req, res);
});

module.exports = router;